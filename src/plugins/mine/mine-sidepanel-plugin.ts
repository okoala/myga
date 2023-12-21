import {
  IAppSidepanelPlugin,
  IPlugin,
  SidepanelFooterItemRegistyOption,
} from '@core';
import { Mine } from './components/mine';
import { pluginId, pluginName, pluginDesc } from './constants';

export class MineSidepanelPlugin implements IAppSidepanelPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerSidepanelFooterItem(): SidepanelFooterItemRegistyOption {
    return {
      RenderComponent: Mine,
    };
  }
}
