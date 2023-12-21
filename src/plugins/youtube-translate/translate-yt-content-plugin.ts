import { ContentRegistyOption, IAppContentPlugin } from '@core';
import { TranslateYoutube } from './components/translate-yt';
import { pluginId, pluginName, pluginDesc, pluginUrls } from './constants';

export class TranslateYoutubeContentPlugin implements IAppContentPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;
  readonly pluginUrls = pluginUrls;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: TranslateYoutube,
    };
  }
}
