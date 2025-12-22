declare module "gnomejs://main.js" {
  export type DeviceItem = {
    label: {
      get_text: () => string;
      set_text: (text: string) => void;
    };
  };

  type VolumeIndicator = {
    _deviceItems: Map<number, DeviceItem>;
    _removeDevice: (id: number) => void;
    _addDevice: (id: number) => void;
    connect: (text: string, cb: () => void) => number;
    disconnect: (id: number) => void;
    visible: boolean;
  };

  export const panel: {
    statusArea: {
      dateMenu: {
        _eventsItem: {
          _reloadEvents: () => void;
        };
      };
      quickSettings: {
        _volumeOutput: {
          _output: VolumeIndicator;
        };
        _volumeInput: {
          _input: VolumeIndicator;
        };
        menu: {
          _grid: {
            get_children: () => [{ text: string }];
          };
        };
      };
    };
  };

  export const screenshotUI: {
    connect: (signalName: string, callback: () => void) => number;
    disconnect: (subscriptionId: number) => void;
    screencast_in_progress: boolean;
  };
}

declare module "gnomejs://volume.js" {
  import Gvc from "@gi-types/gvc1";

  export function getMixerControl(): Gvc.MixerControl;
}

declare module "gnomejs://extension.js" {
  import Gio from "@gi-ts/gio2";

  export class Extension {
    uuid: string;
    getSettings(uuid: string): Gio.Settings;
  }
}

declare module "gnomejs://prefs.js" {
  import Gio from "@gi-ts/gio2";

  export class ExtensionPreferences {
    getSettings(uuid: string): Gio.Settings;
  }
}
