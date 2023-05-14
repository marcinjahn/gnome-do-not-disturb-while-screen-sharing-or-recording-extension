import { Settings } from "@gi-types/gio2";

const ExtensionUtils = imports.misc.extensionUtils;

const SettingsPath = "org.gnome.shell.extensions.do-not-disturb-while-screen-sharing-or-recording";

const DoNotDisturbOnScreenSharingSetting = "dnd-on-screen-sharing";
const DoNotDisturbOnScreenRecordingSetting = "dnd-on-screen-recording";
const IsWaylandSetting = "is-wayland"

type AvailableSettings = "dnd-on-screen-sharing" | "dnd-on-screen-recording" | "is-wayland";

export class SettingsManager {
  private settings: Settings | null = null;

  private getSettings(): Settings {
    if (!this.settings) {
      this.settings = ExtensionUtils.getSettings(SettingsPath);
    }

    return this.settings;
  }

  getShouldDndOnScreenSharing(): boolean {
    return this.getSettings().get_boolean(DoNotDisturbOnScreenSharingSetting);
  }

  setShouldDndOnScreenSharing(value: boolean) {
    this.getSettings().set_boolean(DoNotDisturbOnScreenSharingSetting, value);
  }

  getShouldDndOnScreenRecording(): boolean {
    return this.getSettings().get_boolean(DoNotDisturbOnScreenRecordingSetting);
  }

  setShouldDndOnScreenRecording(value: boolean) {
    this.getSettings().set_boolean(DoNotDisturbOnScreenRecordingSetting, value);
  }

  getIsWayland(): boolean {
    return this.getSettings().get_boolean(IsWaylandSetting);
  }

  setIsWayland(value: boolean) {
    this.getSettings().set_boolean(IsWaylandSetting, value);
  }

  connectToChanges(settingName: AvailableSettings, func: () => void): number {
    return this.getSettings().connect(`changed::${settingName}`, func);
  }

  disconnect(subscriptionId: number) {
    this.getSettings().disconnect(subscriptionId);
  }

  dispose() {
    this.settings = null;
  }
}
