import { ContentRegistyOption, IAppContentPlugin } from '@core';
import { QuickMenuMain } from './components/quick-menu-main';
import { pluginId, pluginName, pluginDesc, pluginUrls } from './constants';

export class QuickMenuContentPlugin implements IAppContentPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;
  readonly pluginUrls = pluginUrls;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: QuickMenuMain,
    };
  }
}
