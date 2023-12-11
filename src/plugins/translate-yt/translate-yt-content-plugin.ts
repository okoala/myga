import { ContentRegistyOption, IPlugin } from '@core';
import { TranslateYoutube } from './components/translate-yt';
import { pluginId, pluginName, pluginDesc } from './constants';

export class TranslateYoutubeContentPlugin implements IPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: TranslateYoutube,
    };
  }
}
