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
  window.add(page);

  let settings = new SettingsManager();

  setupPastEventsSettings(page, settings);
  setupOngoingEventsSettings(page, settings);
}

function setupPastEventsSettings(
  page: PreferencesPage,
  settings: SettingsManager
) {
  const group = new PreferencesGroup({
    title: "Past Events",
    description: "Settings related to events that are over",
  });

  const row = new ActionRow({
    title: "Style events in past days as well",
    subtitle:
      "When viewing past days in the panel, the events will be greyed out",
  });

  const toggle = new Switch({
    // active: settings.getShouldStylePastDays(),
    valign: Align.CENTER,
  });

  toggle.connect("state-set", (_, state) => {
    // settings.setShouldStylePastDays(state);

    return false;
  });

  row.add_suffix(toggle);
  row.activatable_widget = toggle;

  group.add(row);
  page.add(group);
}

function setupOngoingEventsSettings(
  page: PreferencesPage,
  settings: SettingsManager
) {
  const group = new PreferencesGroup({
    title: "Ongoing Events",
    description: "Settings related to events that are ongoing",
  });

  const row = new ActionRow({
    title: "Highlight ongoing events",
    subtitle: "Will color events that are ongoing with system accent color",
  });

  const toggle = new Switch({
    // active: settings.getShouldStylePastDays(),
    valign: Align.CENTER,
  });

  toggle.connect("state-set", (_, state) => {
    // settings.setShouldStyleOngoingEvents(state);

    return false;
  });

  row.add_suffix(toggle);
  row.activatable_widget = toggle;

  group.add(row);
  page.add(group);
}

export default { init, fillPreferencesWindow };
