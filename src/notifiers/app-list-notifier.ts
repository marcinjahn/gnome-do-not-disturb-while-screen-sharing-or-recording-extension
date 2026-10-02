export class AppListNotifier {
  private _display: Display | null = null;
  private _getAppsList: (() => string[]) | null = null;
  private _trackedWindows: Map<number, Window> = new Map<number, Window>();

  subscribe(
    getAppsList: () => string[],
    handler: (status: AppListStatus) => void
  ): number | null {
    this._display = global.display;
    this._getAppsList = getAppsList;

    if (!this._display) {
      console.warn(
        "Subscription to applications list status failed, the display cannot be retrieved"
      );
      return null;
    }

    return this._display.connect("window-created", (_, window: Window) => {
      this.trackWindow(window, handler);
    });
  }

  /**
   * WM_CLASS (from the Wayland app_id) isn't always available yet when
   * "window-created" fires - the app_id arrives asynchronously shortly
   * after, unlike X11 clients where WM_CLASS is set synchronously. This
   * affects any toolkit (GTK, Qt, games, etc.), so we also react to the
   * identifiers becoming available/changing before giving up on the window.
   */
  private trackWindow(
    window: Window,
    handler: (status: AppListStatus) => void
  ) {
    let notifyIds: number[] = [];
    let unmanagingId: number | null = null;

    const registerMatch = () => {
      for (const id of notifyIds) {
        window.disconnect(id);
      }
      notifyIds = [];

      unmanagingId = window.connect("unmanaging", () => {
        window.disconnect(unmanagingId!);
        this._trackedWindows.delete(unmanagingId!);

        if (this._trackedWindows.size === 0) {
          handler(AppListStatus.notRunning);
        }
      });

      this._trackedWindows.set(unmanagingId, window);

      handler(AppListStatus.running);
    };

    if (this.matchesAppsList(window)) {
      registerMatch();
      return;
    }

    const tryMatch = () => {
      if (this.matchesAppsList(window)) {
        registerMatch();
      }
    };

    notifyIds.push(window.connect("notify::wm-class", tryMatch));
    notifyIds.push(window.connect("notify::gtk-application-id", tryMatch));

    const cleanupUnmanagingId = window.connect("unmanaging", () => {
      for (const id of notifyIds) {
        window.disconnect(id);
      }
      window.disconnect(cleanupUnmanagingId);
    });
  }

  private matchesAppsList(window: Window): boolean {
    const identifiers = [
      window.get_wm_class(),
      window.get_wm_class_instance(),
      window.get_gtk_application_id(),
      window.get_sandboxed_app_id(),
    ]
      .filter((id): id is string => !!id)
      .map((id) => id.trim().toLowerCase());

    if (identifiers.length === 0) {
      return false;
    }

    const appsList = this._getAppsList?.() ?? [];

    return appsList.some((app) => {
      const normalizedApp = app.trim().toLowerCase();

      return identifiers.includes(normalizedApp);
    });
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
  get_wm_class: () => string | null;
  get_wm_class_instance: () => string | null;
  get_gtk_application_id: () => string | null;
  get_sandboxed_app_id: () => string | null;
  connect: (
    event: "unmanaging" | "notify::wm-class" | "notify::gtk-application-id",
    handler: () => void
  ) => number;
  disconnect: (_: number) => void;
}

export enum AppListStatus {
  running,
  notRunning,
}
