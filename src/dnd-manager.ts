import Gio from "@gi-ts/gio2";
import { SettingsManager } from "settings-manager";

const showBannersSetting = "show-banners";
const notificationsSchemaId = "org.gnome.desktop.notifications";

export class DoNotDisturbManager {
  private _notificationsSettings: Gio.Settings | null = null;
  private _settingsManager: SettingsManager | null = null;

  constructor(settingsManager: SettingsManager) {
    this._settingsManager = settingsManager;
  }

  private getNotificationsSettings() {
    if (!this._notificationsSettings) {
      this._notificationsSettings = new Gio.Settings({
        schema_id: notificationsSchemaId,
      });
    }

    return this._notificationsSettings;
  }

  turnDndOn() {
    this._settingsManager?.setWasDoNotDisturbActive(
      !this.getNotificationsSettings().get_boolean(showBannersSetting)
    );
    this.getNotificationsSettings().set_boolean(showBannersSetting, false);
  }

  turnDndOff() {
    if (!this._settingsManager?.getWasDoNotDisturbActive()) {
      this.getNotificationsSettings().set_boolean(showBannersSetting, true);
    }
  }

  dispose() {
    this._notificationsSettings = null;
  }
}
