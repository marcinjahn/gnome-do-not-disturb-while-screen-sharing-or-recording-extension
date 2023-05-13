import { Settings } from "@gi-types/gio2";

const ExtensionUtils = imports.misc.extensionUtils;

const SettingsPath = "org.gnome.shell.extensions.do-not-disturb-while-sharing-or-recording";

let DoNotDisturbOnScreenSharing = "dnd-on-screen-sharing";
let DoNotDisturbOnScreenRecording = "dnd-on-screen-recording";

type AvailableSettings = "dnd-on-screen-sharing" | "dnd-on-screen-recording";

export class SettingsManager {
  private settings: Settings | null = null;

  private getSettings(): Settings {
    if (!this.settings) {
      this.settings = ExtensionUtils.getSettings(SettingsPath);
    }

    return this.settings;
  }

  getShouldDndOnScreenSharing(): boolean {
    return this.getSettings().get_boolean(DoNotDisturbOnScreenSharing);
  }

  getShouldDndOnScreenRecording(): boolean {
    return this.getSettings().get_boolean(DoNotDisturbOnScreenRecording);
  }

  setShouldDndOnScreenSharing(value: boolean) {
    this.getSettings().set_boolean(DoNotDisturbOnScreenSharing, value);
  }

  setShouldDndOnScreenRecording(value: boolean) {
    this.getSettings().set_boolean(DoNotDisturbOnScreenRecording, value);
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
