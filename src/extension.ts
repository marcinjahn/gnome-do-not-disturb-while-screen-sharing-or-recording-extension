import { Extension } from "gnomejs://extension.js";

import { DoNotDisturbManager } from "dnd-manager";
import {
  AppListNotifier,
  AppListStatus,
  FullscreenNotifier,
  FullscreenStatus,
  ScreenRecordingNotifier,
  ScreenRecordingStatus,
  ScreenSharingNotifier,
  ScreenSharingStatus,
} from "./notifiers";
import { SettingsManager, SettingsPath } from "settings-manager";

enum DndReason {
  screenSharing = "screenSharing",
  screenRecording = "screenRecording",
  fullscreen = "fullscreen",
  appsList = "appsList",
}

export default class DoNotDisturbWhileScreenSharingOrRecordingExtension extends Extension {
  private _settings: SettingsManager | null = null;
  private _settingsSubscription: number | null = null;
  private _dndManager: DoNotDisturbManager | null = null;
  private _activeDndReasons: Set<DndReason> = new Set<DndReason>();
  private _screenRecordingNotifier: ScreenRecordingNotifier | null;
  private _screenRecordingSubId: number | null;
  private _screenSharingNotifier: ScreenSharingNotifier | null;
  private _screenSharingSubId: number | null;
  private _fullscreenNotifier: FullscreenNotifier | null;
  private _fullscreenSubId: number | null;
  private _appListNotifier: AppListNotifier | null;
  private _appListSubId: number | null;

  enable() {
    console.log(`Enabling extension ${this.uuid}`);

    this._settings = new SettingsManager(this.getSettings(SettingsPath));

    this._screenRecordingNotifier = new ScreenRecordingNotifier();
    this._screenSharingNotifier = new ScreenSharingNotifier();
    this._fullscreenNotifier = new FullscreenNotifier();
    this._appListNotifier = new AppListNotifier();
    this._dndManager = new DoNotDisturbManager();

    this._screenRecordingSubId = this._screenRecordingNotifier.subscribe(
      this.handleScreenRecording.bind(this)
    );

    this._screenSharingSubId = this._screenSharingNotifier.subscribe(
      this.handleScreenSharing.bind(this)
    );

    this._fullscreenSubId = this._fullscreenNotifier.subscribe(
      this.handleFullscreen.bind(this)
    );

    this._appListSubId = this._appListNotifier.subscribe(
      () => this._settings?.getDndAppsList() ?? [],
      this.handleAppList.bind(this)
    );
  }

  private handleScreenSharing(status: ScreenSharingStatus) {
    if (!this._settings?.getShouldDndOnScreenSharing()) {
      this.updateDndReason(DndReason.screenSharing, false);
      return;
    }

    this.updateDndReason(
      DndReason.screenSharing,
      status === ScreenSharingStatus.sharing
    );
  }

  private handleScreenRecording(status: ScreenRecordingStatus) {
    if (!this._settings?.getShouldDndOnScreenRecording()) {
      this.updateDndReason(DndReason.screenRecording, false);
      return;
    }

    this.updateDndReason(
      DndReason.screenRecording,
      status === ScreenRecordingStatus.recording
    );
  }

  private handleFullscreen(status: FullscreenStatus) {
    if (!this._settings?.getShouldDndOnFullscreen()) {
      this.updateDndReason(DndReason.fullscreen, false);
      return;
    }

    this.updateDndReason(
      DndReason.fullscreen,
      status === FullscreenStatus.fullscreen
    );
  }

  private handleAppList(status: AppListStatus) {
    if (!this._settings?.getShouldDndOnAppsList()) {
      this.updateDndReason(DndReason.appsList, false);
      return;
    }

    this.updateDndReason(DndReason.appsList, status === AppListStatus.running);
  }

  /**
   * Keeps track of what is currently requesting Do Not Disturb to be on.
   * DND is only switched off once none of the reasons are active anymore,
   * so e.g. screen sharing ending doesn't turn DND off while a full-screen
   * game from the apps list is still running.
   */
  private updateDndReason(reason: DndReason, active: boolean) {
    if (active) {
      this._activeDndReasons.add(reason);
    } else {
      this._activeDndReasons.delete(reason);
    }

    if (this._activeDndReasons.size > 0) {
      this._dndManager?.turnDndOn();
    } else {
      this._dndManager?.turnDndOff();
    }
  }

  disable() {
    console.log(`Disabling extension ${this.uuid}`);

    if (this._settingsSubscription) {
      this._settings?.disconnect(this._settingsSubscription!);
      this._settingsSubscription = null;
    }

    if (this._screenRecordingSubId) {
      this._screenRecordingNotifier?.unsubscribe(this._screenRecordingSubId);
      this._screenRecordingSubId = null;
    }
    this._screenRecordingNotifier = null;

    if (this._screenSharingSubId) {
      this._screenSharingNotifier?.unsubscribe(this._screenSharingSubId);
      this._screenSharingSubId = null;
    }
    this._screenSharingNotifier = null;

    if (this._fullscreenSubId) {
      this._fullscreenNotifier?.unsubscribe(this._fullscreenSubId);
      this._fullscreenSubId = null;
    }
    this._fullscreenNotifier = null;

    if (this._appListSubId) {
      this._appListNotifier?.unsubscribe(this._appListSubId);
      this._appListSubId = null;
    }
    this._appListNotifier = null;

    this._activeDndReasons.clear();

    this._dndManager?.dispose();
    this._dndManager = null;

    this._settings = null;
  }
}
