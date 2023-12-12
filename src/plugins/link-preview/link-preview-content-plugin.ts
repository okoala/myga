import { ContentRegistyOption, IPlugin } from '@core';
import { LinkPreview } from './components/link-preview';
import { pluginId, pluginName, pluginDesc, pluginUrls } from './constants';

export class LinkPreviewContentPlugin implements IPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;
  readonly pluginUrls = pluginUrls;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: LinkPreview,
    };
  }
}
