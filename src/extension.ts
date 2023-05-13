import { DoNotDisturbManager } from "dnd-manager";
import { ScreenRecordingNotifier, ScreenRecordingStatus } from "screen-recording-notifier";
import { SettingsManager } from "settings-manager";

class Extension {
  private _uuid: string | null = null;
  private _settings: SettingsManager | null = null;
  private _settingsSubscription: number | null = null;
  private _dndManager: DoNotDisturbManager | null = null;
  private _screenRecordingNotifier: ScreenRecordingNotifier | null;
  private _screenRecordingSubId: number | null;

  constructor(uuid: string) {
    this._uuid = uuid;
  }

  enable() {
    log(`Enabling extension ${this._uuid}`);

    this._settings = new SettingsManager();
    this._screenRecordingNotifier = new ScreenRecordingNotifier();
    this._dndManager = new DoNotDisturbManager();

    this._screenRecordingSubId = this._screenRecordingNotifier.subscribe((status) => {
      if (status === ScreenRecordingStatus.recording) {
        this._dndManager?.turnOn();
      } else {
        this._dndManager?.turnOff();
      }
    });
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

    this._dndManager?.dispose();
    this._dndManager = null;

    this._settings?.dispose();
    this._settings = null;
  }
}

export default function (meta: { uuid: string }): Extension {
  return new Extension(meta.uuid);
}
