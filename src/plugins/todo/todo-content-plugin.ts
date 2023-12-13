import { ContentRegistyOption, IPlugin } from '@core';
import { TodoEditor } from './components/todo-editor';
import { pluginId, pluginName, pluginDesc } from './constants';

export class TodoContentPlugin implements IPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerContentRender(): ContentRegistyOption {
    return {
      RenderComponent: TodoEditor,
    };
  }
}
