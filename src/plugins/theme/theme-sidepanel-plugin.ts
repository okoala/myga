import { IPlugin, SidepanelFooterItemRegistyOption } from '@core';
import { Theme } from './components/theme';
import { pluginId, pluginName, pluginDesc } from './constants';

export class ThemeSidepanelPlugin implements IPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerSidepanelFooterItem(): SidepanelFooterItemRegistyOption {
    return {
      RenderComponent: Theme,
    };
  }
}
