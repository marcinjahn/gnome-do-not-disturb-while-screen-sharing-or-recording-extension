import { DoNotDisturbManager } from "dnd-manager";
import { ScreenRecordingNotifier, ScreenRecordingStatus } from "./notifiers";
import { SettingsManager } from "settings-manager";
import { ScreenSharingNotifier, ScreenSharingStatus } from "notifiers/screen-sharing-notifier";
import { is_wayland_compositor } from "@gi-types/meta10";

class Extension {
  private _uuid: string | null = null;
  private _settings: SettingsManager | null = null;
  private _settingsSubscription: number | null = null;
  private _dndManager: DoNotDisturbManager | null = null;
  private _screenRecordingNotifier: ScreenRecordingNotifier | null;
  private _screenRecordingSubId: number | null;
  private _screenSharingNotifier: ScreenSharingNotifier | null;
  private _screenSharingSubId: number | null;

  constructor(uuid: string) {
    this._uuid = uuid;
  }

  enable() {
    log(`Enabling extension ${this._uuid}`);

    this._settings = new SettingsManager();

    this.checkCompositor();

    this._screenRecordingNotifier = new ScreenRecordingNotifier();
    this._screenSharingNotifier = new ScreenSharingNotifier();
    this._dndManager = new DoNotDisturbManager();

    this._screenRecordingSubId = this._screenRecordingNotifier.subscribe(
      this.handleScreenRecording.bind(this));

    this._screenSharingSubId = this._screenSharingNotifier.subscribe(
      this.handleScreenSharing.bind(this));
  }

  private checkCompositor() {
    if (!is_wayland_compositor()) {
      this._settings?.setIsWayland(false);
    } else {
      this._settings?.setIsWayland(true);
    }
  }

  private handleScreenSharing(status: ScreenSharingStatus) {
    if (!this._settings?.getShouldDndOnScreenSharing()) {
      return;
    }
    
    if (status === ScreenSharingStatus.sharing) {
      this._dndManager?.turnDndOn();
    } else {
      this._dndManager?.turnDndOff();
    }
  }

  private handleScreenRecording(status: ScreenRecordingStatus) {
    if (!this._settings?.getShouldDndOnScreenRecording()) {
      return;
    }
    
    if (status === ScreenRecordingStatus.recording) {
      this._dndManager?.turnDndOn();
    } else {
      this._dndManager?.turnDndOff();
    }
  }

  disable() {
    log(`Disabling extension ${this._uuid}`);

    if (this._settingsSubscription) {
      this._settings?.disconnect(this._settingsSubscription!);
      this._settingsSubscription = null;
    }

    if (this._screenRecordingSubId) {
      this._screenRecordingNotifier?.unsubscribe(this._screenRecordingSubId);
      this._screenRecordingSubId = null;
    }
    this._screenRecordingNotifier = null;

    if (this._screenSharingSubId) {
      this._screenSharingNotifier?.unsubscribe(this._screenSharingSubId);
      this._screenSharingSubId = null;
    }
    this._screenSharingNotifier = null;

    this._dndManager?.dispose();
    this._dndManager = null;

    this._settings?.dispose();
    this._settings = null;
  }
}

export default function (meta: { uuid: string }): Extension {
  return new Extension(meta.uuid);
}
