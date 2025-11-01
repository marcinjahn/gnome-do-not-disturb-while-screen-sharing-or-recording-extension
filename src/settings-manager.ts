import Gio from "@gi-ts/gio2";

export const SettingsPath =
  "org.gnome.shell.extensions.do-not-disturb-while-screen-sharing-or-recording";

const DoNotDisturbOnScreenSharingSetting = "dnd-on-screen-sharing";
const DoNotDisturbOnScreenRecordingSetting = "dnd-on-screen-recording";
const IsWaylandSetting = "is-wayland";
const WasDoNotDisturbActiveSetting = "was-dnd-active";

type AvailableSettings =
  | "dnd-on-screen-sharing"
  | "dnd-on-screen-recording"
  | "is-wayland"
  | "was-dnd-active";

export class SettingsManager {
  private settings: Gio.Settings;

  constructor(settings: Gio.Settings) {
    this.settings = settings;
  }

  getShouldDndOnScreenSharing(): boolean {
    return this.settings.get_boolean(DoNotDisturbOnScreenSharingSetting);
  }

  setShouldDndOnScreenSharing(value: boolean) {
    this.settings.set_boolean(DoNotDisturbOnScreenSharingSetting, value);
  }

  getShouldDndOnScreenRecording(): boolean {
    return this.settings.get_boolean(DoNotDisturbOnScreenRecordingSetting);
  }

  setShouldDndOnScreenRecording(value: boolean) {
    this.settings.set_boolean(DoNotDisturbOnScreenRecordingSetting, value);
  }

  getIsWayland(): boolean {
    return this.settings.get_boolean(IsWaylandSetting);
  }

  setIsWayland(value: boolean) {
    this.settings.set_boolean(IsWaylandSetting, value);
  }

  getWasDoNotDisturbActive(): boolean {
    return this.settings.get_boolean(WasDoNotDisturbActiveSetting);
  }

  setWasDoNotDisturbActive(value: boolean) {
    this.settings.set_boolean(WasDoNotDisturbActiveSetting, value);
  }

  connectToChanges(settingName: AvailableSettings, func: () => void): number {
    return this.settings.connect(`changed::${settingName}`, func);
  }

  disconnect(subscriptionId: number) {
    this.settings.disconnect(subscriptionId);
  }
}
