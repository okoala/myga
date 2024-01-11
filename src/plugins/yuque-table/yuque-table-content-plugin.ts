import { ContentRegistyOption, IAppContentPlugin } from '@core';
import { YuqueTableCalendar } from './components/calendar';
import { pluginId, pluginName, pluginDesc, pluginUrls } from './constants';

export class YuqueTableContentPlugin implements IAppContentPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;
  readonly pluginUrls = pluginUrls;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: YuqueTableCalendar,
    };
  }
}
