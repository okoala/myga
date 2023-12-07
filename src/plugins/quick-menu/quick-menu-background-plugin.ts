import { BackgroundRegistyOption, IPlugin } from '@core';

export class QuickMenuBackgroundPlugin implements IPlugin {
  pluginId = 'quick-menu';
  pluginName = '快捷菜单';
  pluginDesc = '工作台上任意地方右键可以快速打开创建文档菜单';

  registerBackground(): BackgroundRegistyOption {
    return {};
  }
}
