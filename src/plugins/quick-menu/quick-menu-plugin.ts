import { ContentRenderRegistyOption, IPlugin } from '@core';
import { Configuration } from '@core/configuration';
import { QuickMenuMain } from './quick-menu-main';

export class QuickMenuPlugin implements IPlugin {
  pluginId = 'quick-menu';
  pluginName = '快捷菜单';
  pluginDesc = '工作台上任意地方右键可以快速打开创建文档菜单';

  registerConfiguraion(configuration: Configuration): void {
    configuration.registerConfiguration({
      id: this.pluginId,
      title: this.pluginName,
      description: this.pluginDesc,
    });
  }

  registerContentRender(): ContentRenderRegistyOption {
    return {
      RenderComponent: QuickMenuMain,
    };
  }
}
