import Gio from "@gi-ts/gio2";

export const SettingsPath =
  "org.gnome.shell.extensions.do-not-disturb-while-screen-sharing-or-recording";

const DoNotDisturbOnScreenSharingSetting = "dnd-on-screen-sharing";
const DoNotDisturbOnScreenRecordingSetting = "dnd-on-screen-recording";
const DoNotDisturbOnFullscreenSetting = "dnd-on-fullscreen";
const DoNotDisturbOnAppsListSetting = "dnd-on-apps-list";
const DoNotDisturbAppsListSetting = "dnd-apps-list";

type AvailableSettings =
  | "dnd-on-screen-sharing"
  | "dnd-on-screen-recording"
  | "dnd-on-fullscreen"
  | "dnd-on-apps-list"
  | "dnd-apps-list";

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

  getShouldDndOnFullscreen(): boolean {
    return this.settings.get_boolean(DoNotDisturbOnFullscreenSetting);
  }

  setShouldDndOnFullscreen(value: boolean) {
    this.settings.set_boolean(DoNotDisturbOnFullscreenSetting, value);
  }

  getShouldDndOnAppsList(): boolean {
    return this.settings.get_boolean(DoNotDisturbOnAppsListSetting);
  }

  setShouldDndOnAppsList(value: boolean) {
    this.settings.set_boolean(DoNotDisturbOnAppsListSetting, value);
  }

  getDndAppsList(): string[] {
    return this.settings.get_strv(DoNotDisturbAppsListSetting);
  }

  setDndAppsList(value: string[]) {
    this.settings.set_strv(DoNotDisturbAppsListSetting, value);
  }

  connectToChanges(settingName: AvailableSettings, func: () => void): number {
    return this.settings.connect(`changed::${settingName}`, func);
  }

  disconnect(subscriptionId: number) {
    this.settings.disconnect(subscriptionId);
  }
}
