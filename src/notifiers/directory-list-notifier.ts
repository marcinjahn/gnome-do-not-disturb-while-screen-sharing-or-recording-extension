import Gio from "@gi-ts/gio2";
import GLib from "@gi-ts/glib2";

Gio._promisify(
  Gio.File.prototype,
  "query_info_async",
  "query_info_finish"
);
Gio._promisify(
  Gio.File.prototype,
  "load_contents_async",
  "load_contents_finish"
);

export class DirectoryListNotifier {
  private _display: Display | null = null;
  private _getDirectoriesList: (() => string[]) | null = null;
  private _pendingWindows: Map<number, Window> = new Map<number, Window>();
  private _trackedWindows: Map<number, Window> = new Map<number, Window>();
  private _active = false;

  subscribe(
    getDirectoriesList: () => string[],
    handler: (status: DirectoryListStatus) => void
  ): number | null {
    this._display = global.display;
    this._getDirectoriesList = getDirectoriesList;
    this._active = true;

    if (!this._display) {
      this._active = false;
      console.warn(
        "Subscription to directories list status failed, the display cannot be retrieved"
      );
      return null;
    }

    return this._display.connect("window-created", (_, window: Window) => {
      void this.trackWindow(window, handler);
    });
  }

  private async trackWindow(
    window: Window,
    handler: (status: DirectoryListStatus) => void
  ) {
    let unmanaged = false;
    const unmanagingId = window.connect("unmanaging", () => {
      unmanaged = true;
      window.disconnect(unmanagingId);
      this._pendingWindows.delete(unmanagingId);

      if (
        this._trackedWindows.delete(unmanagingId) &&
        this._trackedWindows.size === 0
      ) {
        handler(DirectoryListStatus.notRunning);
      }
    });

    this._pendingWindows.set(unmanagingId, window);

    const matches = await this.matchesDirectoriesList(window);

    if (unmanaged || !this._active) {
      return;
    }

    this._pendingWindows.delete(unmanagingId);

    if (!matches) {
      window.disconnect(unmanagingId);
      return;
    }

    this._trackedWindows.set(unmanagingId, window);
    handler(DirectoryListStatus.running);
  }

  private async matchesDirectoriesList(window: Window): Promise<boolean> {
    const directories = (this._getDirectoriesList?.() ?? [])
      .map((dir) => this.normalizeDirectory(dir))
      .filter((dir): dir is string => !!dir);

    if (directories.length === 0) {
      return false;
    }

    const pid = window.get_pid();

    if (!pid || pid <= 0) {
      return false;
    }

    const candidates = await this.getProcessCandidates(pid);

    return candidates.some((candidate) =>
      directories.some((dir) => candidate.startsWith(dir))
    );
  }

  /**
   * Collects paths that could reveal where a process is running from: the
   * resolved executable path (via /proc/<pid>/exe), and every command line
   * argument (via /proc/<pid>/cmdline). The latter is needed for Wine/Proton
   * games, whose /proc/<pid>/exe points at the Wine loader binary rather
   * than the actual game's .exe - the real path is only visible as a
   * command line argument, often using a Windows-style drive letter and
   * backslashes, so a normalized (forward-slash, no drive letter) variant
   * of each candidate is also included.
   */
  private async getProcessCandidates(pid: number): Promise<string[]> {
    const candidates: string[] = [];

    const [exePath, cmdlineArgs] = await Promise.all([
      this.resolveExePath(pid),
      this.readCmdlineArgs(pid),
    ]);

    if (exePath) {
      candidates.push(exePath);
    }

    candidates.push(...cmdlineArgs);

    const normalizedVariants = candidates
      .map((candidate) => this.normalizeWineStylePath(candidate))
      .filter((candidate): candidate is string => !!candidate);

    return [...candidates, ...normalizedVariants].map((candidate) =>
      candidate.toLowerCase()
    );
  }

  private async resolveExePath(pid: number): Promise<string | null> {
    try {
      const file = Gio.File.new_for_path(`/proc/${pid}/exe`);
      const info = await file.query_info_async(
        Gio.FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET,
        Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
        0,
        null
      );

      return info.get_symlink_target();
    } catch {
      return null;
    }
  }

  private async readCmdlineArgs(pid: number): Promise<string[]> {
    try {
      const file = Gio.File.new_for_path(`/proc/${pid}/cmdline`);
      const [contents] = await file.load_contents_async(null);

      const decoder = new TextDecoder("utf-8");

      return decoder
        .decode(contents)
        .split("\0")
        .filter((arg) => arg.length > 0);
    } catch {
      return [];
    }
  }

  private normalizeWineStylePath(value: string): string | null {
    if (!value.includes("\\")) {
      return null;
    }

    return value.replace(/\\/g, "/").replace(/^[a-zA-Z]:/, "");
  }

  private normalizeDirectory(rawDirectory: string): string | null {
    let directory = rawDirectory.trim();

    if (!directory) {
      return null;
    }

    if (directory === "~" || directory.startsWith("~/")) {
      directory = GLib.get_home_dir() + directory.slice(1);
    }

    if (!directory.endsWith("/")) {
      directory += "/";
    }

    return directory.toLowerCase();
  }

  unsubscribe(subscriptionId: number) {
    this._active = false;
    this._display?.disconnect(subscriptionId);

    for (const [unmanagingId, window] of this._pendingWindows) {
      window.disconnect(unmanagingId);
    }
    this._pendingWindows.clear();

    for (const [unmanagingId, window] of this._trackedWindows) {
      window.disconnect(unmanagingId);
    }

    this._trackedWindows.clear();
  }
}

interface Display {
  connect: (
    event: "window-created",
    handler: (_: unknown, window: Window) => void
  ) => number;
  disconnect: (_: number) => void;
}

interface Window {
  get_pid: () => number;
  connect: (event: "unmanaging", handler: () => void) => number;
  disconnect: (_: number) => void;
}

export enum DirectoryListStatus {
  running,
  notRunning,
}
