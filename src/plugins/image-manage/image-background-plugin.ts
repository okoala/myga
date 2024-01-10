import {
  BackgroundContextMenuRegistryOption,
  IAppBackgroundPlugin,
} from '@core';

export class ImageManageBackgroundPlugin implements IAppBackgroundPlugin {
  pluginId = 'image-manager';
  pluginName = '图片管理';
  pluginDesc = '图片管理 (保存图片)';

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
