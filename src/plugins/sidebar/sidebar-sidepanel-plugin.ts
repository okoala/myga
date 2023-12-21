import { IAppSidepanelPlugin, SidepanelRenderRegistyOption } from '@core';
import { Sidebar } from './components/sidebar';
import { pluginId, pluginName, pluginDesc } from './constants';

export class SidebarSidepanelPlugin implements IAppSidepanelPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerSidepanelRender(): SidepanelRenderRegistyOption {
    return {
      RenderComponent: Sidebar,
    };
  }
}
