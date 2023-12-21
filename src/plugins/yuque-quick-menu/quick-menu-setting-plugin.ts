import { IAppSettingPlugin } from '@core';
import { Configuration } from '@core/configuration';
import { pluginId, pluginName, pluginDesc } from './constants';

export class QuickMenuSettingPlugin implements IAppSettingPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerConfiguraion(configuration: Configuration): void {
    configuration.registerConfiguration({
      id: pluginId,
      title: pluginName,
      description: pluginDesc,
    });
  }
}
