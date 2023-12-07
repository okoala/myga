import { ContentRegistyOption, IPlugin } from '@core';
import { QuickMenuMain } from './components/quick-menu-main';
import { pluginId, pluginName, pluginDesc } from './constants';

export class QuickMenuContentPlugin implements IPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: QuickMenuMain,
    };
  }
}
