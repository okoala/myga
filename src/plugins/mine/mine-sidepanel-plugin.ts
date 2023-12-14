import { IPlugin, SidepanelFooterItemRegistyOption } from '@core';
import { Mine } from './components/mine';
import { pluginId, pluginName, pluginDesc } from './constants';

export class MineSidepanelPlugin implements IPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerSidepanelFooterItem(): SidepanelFooterItemRegistyOption {
    return {
      RenderComponent: Mine,
    };
  }
}
