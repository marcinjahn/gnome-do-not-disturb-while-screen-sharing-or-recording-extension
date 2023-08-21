import Meta from "@gi-types/meta10";

export class ScreenSharingNotifier {
  private _handlesCount: number;
  private _handles: Map<number, Handle> = new Map<number, Handle>();
  private _controller: any;

  subscribe(handler: (status: ScreenSharingStatus) => void): number | null {
    if (!Meta.is_wayland_compositor()) {
      console.warn(
        '"Do Not Disturb While Screen Sharing or Recording" extension does not support compositors other than Wayland. Subscription will not be created. If you\'re using X11 exlusively, disable or remove this extension since it will not work anyway.'
      );
      return null;
    }

    this._controller = global.backend.get_remote_access_controller();

    if (!this._controller) {
      console.warn(
        "Subscription to screen sharing status failed, the remote access controller cannot be retrieved"
      );
      return null;
    }

    return this._controller.connect("new-handle", (_, handle: Handle) => {
      if (handle.is_recording) {
        return;
      }

      const stopId = handle.connect("stopped", () => {
        handle.disconnect(stopId);
        this._handles.delete(stopId);

        if (this._handles.size === 0) {
          handler(ScreenSharingStatus.notSharing);
        }
      });

      handler(ScreenSharingStatus.sharing);

      this._handles.set(stopId, handle);
    });
  }

  unsubscribe(subscriptionId: number) {
    this._controller?.disconnect(subscriptionId);

    for (const handlePair of this._handles) {
      handlePair[1].disconnect(handlePair[0]);
    }
  }
}

interface Handle {
  is_recording: boolean;
  connect: (event: "stopped", handler: () => void) => number;
  disconnect: (_: number) => void;
}

export enum ScreenSharingStatus {
  sharing,
  notSharing,
}
