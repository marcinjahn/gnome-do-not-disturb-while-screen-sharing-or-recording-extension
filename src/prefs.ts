import { ExtensionPreferences } from "gnomejs://prefs.js";

import Adw from "@gi-ts/adw1";
import Gtk from "@gi-ts/gtk4";

import { SettingsManager, SettingsPath } from "./settings-manager";

export default class Preferences extends ExtensionPreferences {
  fillPreferencesWindow(window: Adw.PreferencesWindow) {
    const page = new Adw.PreferencesPage();

    const settings = new SettingsManager(this.getSettings(SettingsPath));

    const group = new Adw.PreferencesGroup({
      title: "Automatic Do Not Disturb Mode",
      description:
        "Select what events should cause Do Not Disturb mode to be switched on automatically",
    });

    this.setupScreenRecording(settings, group);
    this.setupScreenSharing(settings, group);
    this.setupAudioInput(settings, group);

    page.add(group);
    window.add(page);
  }

  setupScreenRecording(settings: SettingsManager, group: Adw.PreferencesGroup) {
    const row = new Adw.ActionRow({
      title: "Screen Recording",
    });

    const toggle = new Gtk.Switch({
      active: settings.getShouldDndOnScreenRecording(),
      valign: Gtk.Align.CENTER,
    });

    toggle.connect("state-set", (_, state) => {
      settings.setShouldDndOnScreenRecording(state);

      return false;
    });

    row.add_suffix(toggle);
    row.activatable_widget = toggle;

    group.add(row);
  }

  setupScreenSharing(settings: SettingsManager, group: Adw.PreferencesGroup) {
    const isWayland = settings.getIsWayland();

    const row = new Adw.ActionRow({
      title: "Screen Sharing",
      subtitle: !isWayland
        ? "Disabled, since it works only on Wayland sessions, and you are running X11"
        : "",
      sensitive: isWayland,
    });

    const toggle = new Gtk.Switch({
      active: isWayland ? settings.getShouldDndOnScreenSharing() : false,
      valign: Gtk.Align.CENTER,
      sensitive: isWayland,
    });

    toggle.connect("state-set", (_, state) => {
      settings.setShouldDndOnScreenSharing(state);

      return false;
    });

    row.add_suffix(toggle);
    row.activatable_widget = toggle;

    group.add(row);
  }

  setupAudioInput(settings: SettingsManager, group: Adw.PreferencesGroup) {
    const row = new Adw.ActionRow({
      title: "Audio Input",
    });

    const toggle = new Gtk.Switch({
      active: settings.getShouldDndOnAudioInput(),
      valign: Gtk.Align.CENTER,
    });

    toggle.connect("state-set", (_, state) => {
      settings.setShouldDndOnAudioInput(state);

      return false;
    });

    row.add_suffix(toggle);
    row.activatable_widget = toggle;

    group.add(row);
  }
}
