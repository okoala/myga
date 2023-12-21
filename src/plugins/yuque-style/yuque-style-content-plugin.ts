import { ContentRegistyOption, IAppContentPlugin } from '@core';
import { pluginId, pluginName, pluginDesc } from './constants';
import { YuqueStyle } from './components/yuque-style';

export class YuqueStyleContentPlugin implements IAppContentPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: YuqueStyle,
    };
  }
}
