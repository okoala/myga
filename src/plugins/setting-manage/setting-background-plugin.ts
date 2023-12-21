import { BackgroundActionRegistryOption, IAppBackgroundPlugin } from '@core';

export class SettingManageBackgroundPlugin implements IAppBackgroundPlugin {
  pluginId = 'setting-manager';
  pluginName = '插件配置';
  pluginDesc = '插件管理页面';

  init() {
    chrome.action.setTitle({
      title: '打开设置页',
    });
  }

  registerBackgroundActionClicked(): BackgroundActionRegistryOption {
    return {
      name: 'toggle-setting-page',
      handler: async () => {
        // 打开设置页
        chrome.runtime.openOptionsPage();
      },
    };
  }
}
