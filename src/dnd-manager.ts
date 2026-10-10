import Gio from "@gi-ts/gio2";

const showBannersSetting = "show-banners";
const schemaId = "org.gnome.desktop.notifications";

export class DoNotDisturbManager {
  private _settings: Gio.Settings | null = null;
  private _previousShowBanners: boolean | null = null;

  private getSettings() {
    if (!this._settings) {
      this._settings = new Gio.Settings({ schema_id: schemaId });
    }

    return this._settings;
  }

  turnDndOn() {
    const settings = this.getSettings();

    if (this._previousShowBanners === null) {
      this._previousShowBanners = settings.get_boolean(showBannersSetting);
    }

    settings.set_boolean(showBannersSetting, false);
  }

  turnDndOff() {
    if (this._previousShowBanners === null) {
      return;
    }

    this.getSettings().set_boolean(
      showBannersSetting,
      this._previousShowBanners
    );
    this._previousShowBanners = null;
  }

  dispose() {
    this.turnDndOff();
    this._settings = null;
  }
}
