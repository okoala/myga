import { ContentRegistyOption, IAppContentPlugin } from '@core';
import { pluginId, pluginName, pluginDesc } from './constants';
import { YuqueBeautify } from './components/yuque-beautify';

export class YuqueBeautifyContentPlugin implements IAppContentPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: YuqueBeautify,
    };
  }
}
