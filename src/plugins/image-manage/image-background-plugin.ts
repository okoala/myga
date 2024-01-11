import {
  BackgroundContextMenuRegistryOption,
  IAppBackgroundPlugin,
} from '@core';
import { pluginDesc, pluginId, pluginName } from './constants';

export class ImageManageBackgroundPlugin implements IAppBackgroundPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  init() {}

  registerBackgroundContextMenusClicked(): BackgroundContextMenuRegistryOption {
    return {
      name: 'save-image',
      get title() {
        return '保存图片';
      },
      contexts: ['image'],
      handler: async (info, tab) => {
        console.log('---', info);
      },
    };
  }
}
