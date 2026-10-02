export class FullscreenNotifier {
  private _display: Display | null = null;

  subscribe(handler: (status: FullscreenStatus) => void): number | null {
    this._display = global.display;

    if (!this._display) {
      console.warn(
        "Subscription to fullscreen status failed, the display cannot be retrieved"
      );
      return null;
    }

    return this._display.connect("in-fullscreen-changed", () => {
      handler(
        this.isAnyMonitorFullscreen()
          ? FullscreenStatus.fullscreen
          : FullscreenStatus.notFullscreen
      );
    });
  }

  private isAnyMonitorFullscreen(): boolean {
    if (!this._display) {
      return false;
    }

    const monitorsCount = this._display.get_n_monitors();

    for (let i = 0; i < monitorsCount; i++) {
      if (this._display.get_monitor_in_fullscreen(i)) {
        return true;
      }
    }

    return false;
  }

  unsubscribe(subscriptionId: number) {
    this._display?.disconnect(subscriptionId);
  }
}

interface Display {
  connect: (event: "in-fullscreen-changed", handler: () => void) => number;
  disconnect: (_: number) => void;
  get_n_monitors: () => number;
  get_monitor_in_fullscreen: (monitorIndex: number) => boolean;
}

export enum FullscreenStatus {
  fullscreen,
  notFullscreen,
}
