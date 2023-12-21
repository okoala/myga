import {
  IAppSidepanelPlugin,
  IPlugin,
  SidepanelItemRegistyOption,
} from '@core';
import { Todo } from './components/todo';
import logo from '@assets/logo/okrrr-48.png';
import { pluginId, pluginName, pluginDesc } from './constants';

export class TodoSidepanelPlugin implements IAppSidepanelPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerSidepanelItem(): SidepanelItemRegistyOption {
    return {
      id: 'todo',
      title: '待办',
      icon: logo,
      RenderComponent: Todo,
    };
  }
}
