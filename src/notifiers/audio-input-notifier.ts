import * as Main from "gnomejs://main.js";

export class AudioInputNotifier {
  subscribe(handler: (status: AudioInputStatus) => void): number {
    return Main.panel.statusArea.quickSettings._volumeInput._input.connect(
      "notify::visible",
      () => {
        const status = Main.panel.statusArea.quickSettings._volumeInput._input
          .visible
          ? AudioInputStatus.active
          : AudioInputStatus.inactive;

        handler(status);
      }
    );
  }

  unsubscribe(subscriptionId: number) {
    Main.panel.statusArea.quickSettings._volumeInput._input.disconnect(
      subscriptionId
    );
  }
}

export enum AudioInputStatus {
  active,
  inactive,
}
