import { Settings } from "@gi-types/gio2";

const showBannersSetting = "show-banners";
const schemaId = 'org.gnome.desktop.notifications'

export class DoNotDisturbManager {
  private _settings: Settings | null = null;

  private getSettings() {
    if (!this._settings) {
      this._settings = new Settings({schema_id: schemaId});
    }
    
    return this._settings;
  }

  turnDndOn() {
    this.getSettings().set_boolean(showBannersSetting, false);
  }

  turnDndOff() {
    this.getSettings().set_boolean(showBannersSetting, true);
  }

  dispose() {
    this._settings = null;
  }
}