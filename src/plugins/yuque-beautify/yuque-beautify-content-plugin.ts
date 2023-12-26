import { ContentRegistyOption, IAppContentPlugin } from '@core';
import { pluginId, pluginName, pluginDesc, pluginUrls } from './constants';
import { YuqueBeautify } from './components/yuque-beautify';

export class YuqueBeautifyContentPlugin implements IAppContentPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;
  readonly pluginUrls = pluginUrls;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: YuqueBeautify,
    };
  }
}
