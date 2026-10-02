import Gio from "@gi-ts/gio2";
import GLib from "@gi-ts/glib2";

export class DirectoryListNotifier {
  private _display: Display | null = null;
  private _getDirectoriesList: (() => string[]) | null = null;
  private _trackedWindows: Map<number, Window> = new Map<number, Window>();

  subscribe(
    getDirectoriesList: () => string[],
    handler: (status: DirectoryListStatus) => void
  ): number | null {
    this._display = global.display;
    this._getDirectoriesList = getDirectoriesList;

    if (!this._display) {
      console.warn(
        "Subscription to directories list status failed, the display cannot be retrieved"
      );
      return null;
    }

    return this._display.connect("window-created", (_, window: Window) => {
      if (!this.matchesDirectoriesList(window)) {
        return;
      }

      const unmanagingId = window.connect("unmanaging", () => {
        window.disconnect(unmanagingId);
        this._trackedWindows.delete(unmanagingId);

        if (this._trackedWindows.size === 0) {
          handler(DirectoryListStatus.notRunning);
        }
      });

      this._trackedWindows.set(unmanagingId, window);

      handler(DirectoryListStatus.running);
    });
  }

  private matchesDirectoriesList(window: Window): boolean {
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

    const candidates = this.getProcessCandidates(pid);

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
  private getProcessCandidates(pid: number): string[] {
    const candidates: string[] = [];

    const exePath = this.resolveExePath(pid);

    if (exePath) {
      candidates.push(exePath);
    }

    candidates.push(...this.readCmdlineArgs(pid));

    const normalizedVariants = candidates
      .map((candidate) => this.normalizeWineStylePath(candidate))
      .filter((candidate): candidate is string => !!candidate);

    return [...candidates, ...normalizedVariants].map((candidate) =>
      candidate.toLowerCase()
    );
  }

  private resolveExePath(pid: number): string | null {
    try {
      const file = Gio.File.new_for_path(`/proc/${pid}/exe`);
      const info = file.query_info(
        Gio.FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET,
        Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
        null
      );

      return info.get_symlink_target();
    } catch {
      return null;
    }
  }

  private readCmdlineArgs(pid: number): string[] {
    try {
      const file = Gio.File.new_for_path(`/proc/${pid}/cmdline`);
      const [success, contents] = file.load_contents(null);

      if (!success) {
        return [];
      }

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
    this._display?.disconnect(subscriptionId);

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
