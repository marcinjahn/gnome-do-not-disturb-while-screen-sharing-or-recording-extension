import * as Main from "gnomejs://main.js";

export class ScreenRecordingNotifier {
  subscribe(handler: (status: ScreenRecordingStatus) => void): number {
    return Main.screenshotUI.connect("notify::screencast-in-progress", () => {
      const status = Main.screenshotUI.screencast_in_progress
        ? ScreenRecordingStatus.recording
        : ScreenRecordingStatus.notRecording;

      handler(status);
    });
  }

  unsubscribe(subscriptionId: number) {
    Main.screenshotUI.disconnect(subscriptionId);
  }
}

export enum ScreenRecordingStatus {
  recording,
  notRecording,
}
