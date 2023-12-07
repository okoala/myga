import { IPlugin } from '@core';
import { SettingPage } from '.';

export class SettingManagePlugin implements IPlugin {
  pluginId = 'setting-manager';
  pluginName = '插件配置';
  pluginDesc = '插件管理页面';
  // 注册配置渲染
  registerSettingRender() {
    return {
      RenderComponent: SettingPage,
    };
  }
}
