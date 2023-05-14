import {
  PreferencesPage,
  PreferencesGroup,
  ActionRow,
  PreferencesWindow,
} from "@gi-types/adw1";
import { Switch, Align } from "@gi-types/gtk4";
import { SettingsManager } from "./settings-manager";

function init() {}

function fillPreferencesWindow(window: PreferencesWindow) {
  const page = new PreferencesPage();

  const settings = new SettingsManager();

  const group = new PreferencesGroup({
    title: "Automatic Do Not Disturb Mode",
    description: "Select what events should cause Do Not Disturb mode to be switched on automatically",
  });

  setupScreenRecording(settings, group);
  setupScreenSharing(settings, group);

  page.add(group);
  window.add(page);
}

function setupScreenRecording(settings: SettingsManager, group: PreferencesGroup) {
  const row = new ActionRow({
    title: "Screen Recording"
  });

  const toggle = new Switch({
    active: settings.getShouldDndOnScreenRecording(),
    valign: Align.CENTER,
  });

  toggle.connect("state-set", (_, state) => {
    settings.setShouldDndOnScreenRecording(state);

    return false;
  });

  row.add_suffix(toggle);
  row.activatable_widget = toggle;

  group.add(row);
}

function setupScreenSharing(settings: SettingsManager, group: PreferencesGroup) {
  const isWayland = settings.getIsWayland();
  

  const row = new ActionRow({
    title: "Screen Sharing",
    subtitle: !isWayland ? 
      "Disabled, since it works only on Wayland sessions, and you are running X11" :
      "",
    sensitive: isWayland
  });

  const toggle = new Switch({
    active: isWayland ? settings.getShouldDndOnScreenSharing() : false,
    valign: Align.CENTER,
    sensitive: isWayland
  });

  toggle.connect("state-set", (_, state) => {
    settings.setShouldDndOnScreenSharing(state);

    return false;
  });

  row.add_suffix(toggle);
  row.activatable_widget = toggle;

  group.add(row);
}


export default { init, fillPreferencesWindow };
