import { Extension } from "gnomejs://extension.js";

import Meta from "@gi-types/meta10";

import { DoNotDisturbManager } from "dnd-manager";
import {
  ScreenRecordingNotifier,
  ScreenRecordingStatus,
  ScreenSharingNotifier,
  ScreenSharingStatus,
  AudioInputNotifier,
  AudioInputStatus,
} from "./notifiers";
import { SettingsManager, SettingsPath } from "settings-manager";

export default class DoNotDisturbWhileScreenSharingOrRecordingExtension extends Extension {
  private _settings: SettingsManager | null = null;
  private _settingsSubscription: number | null = null;
  private _dndManager: DoNotDisturbManager | null = null;
  private _screenRecordingNotifier: ScreenRecordingNotifier | null;
  private _screenRecordingSubId: number | null;
  private _screenSharingNotifier: ScreenSharingNotifier | null;
  private _screenSharingSubId: number | null;
  private _audioInputNotifier: AudioInputNotifier | null;
  private _audioInputSubId: number | null;

  enable() {
    console.log(`Enabling extension ${this.uuid}`);

    this._settings = new SettingsManager(this.getSettings(SettingsPath));

    this.checkCompositor();

    this._screenRecordingNotifier = new ScreenRecordingNotifier();
    this._screenSharingNotifier = new ScreenSharingNotifier();
    this._audioInputNotifier = new AudioInputNotifier();
    this._dndManager = new DoNotDisturbManager();

    this._screenRecordingSubId = this._screenRecordingNotifier.subscribe(
      this.handleScreenRecording.bind(this)
    );

    this._screenSharingSubId = this._screenSharingNotifier.subscribe(
      this.handleScreenSharing.bind(this)
    );

    this._audioInputSubId = this._audioInputNotifier.subscribe(
      this.handleAudioInput.bind(this)
    );
  }

  private checkCompositor() {
    if (!Meta.is_wayland_compositor()) {
      this._settings?.setIsWayland(false);
    } else {
      this._settings?.setIsWayland(true);
    }
  }

  private handleScreenSharing(status: ScreenSharingStatus) {
    if (!this._settings?.getShouldDndOnScreenSharing()) {
      return;
    }

    if (status === ScreenSharingStatus.sharing) {
      this._dndManager?.turnDndOn();
    } else {
      this._dndManager?.turnDndOff();
    }
  }

  private handleScreenRecording(status: ScreenRecordingStatus) {
    if (!this._settings?.getShouldDndOnScreenRecording()) {
      return;
    }

    if (status === ScreenRecordingStatus.recording) {
      this._dndManager?.turnDndOn();
    } else {
      this._dndManager?.turnDndOff();
    }
  }

  private handleAudioInput(status: AudioInputStatus) {
    if (!this._settings?.getShouldDndOnAudioInput()) {
      return;
    }

    if (status === AudioInputStatus.active) {
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

    if (this._audioInputSubId) {
      this._audioInputNotifier?.unsubscribe(this._audioInputSubId);
      this._audioInputSubId = null;
    }
    this._audioInputNotifier = null;

    this._dndManager?.dispose();
    this._dndManager = null;

    this._settings = null;
  }
}
