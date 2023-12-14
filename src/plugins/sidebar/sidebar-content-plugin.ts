import {
  ContentMessagerRegistyOption,
  ContentRegistyOption,
  IPlugin,
} from '@core';
import { SidebarEntry } from './components/sidebar-entry';
import {
  pluginId,
  pluginName,
  pluginDesc,
  contentSidebarEventName,
} from './constants';
import { sidebarIframeService } from './services/sidebar-iframe-service';

export class SidebarContentPlugin implements IPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: SidebarEntry,
    };
  }

  registerContentMessager(): ContentMessagerRegistyOption {
    return {
      name: contentSidebarEventName,
      handler: async data => {
        if (data.isOpen) {
          sidebarIframeService.show();
        } else {
          sidebarIframeService.hide();
        }
        return true;
      },
    };
  }
}
