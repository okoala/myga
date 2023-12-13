import { ContentRegistyOption, IPlugin } from '@core';
import { Todo } from './components/todo';
import { pluginId, pluginName, pluginDesc } from './constants';

export class TodoContentPlugin implements IPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: Todo,
    };
  }
}
