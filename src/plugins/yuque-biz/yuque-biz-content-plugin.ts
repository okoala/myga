import { IAppContentPlugin } from '@core';
import { pluginId, pluginName, pluginDesc } from './constants';

export class YuqueBizContentPlugin implements IAppContentPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  init() {}
}
