import { Configuration } from '@core/configuration';
import { IAppConfig } from './interfaces/i-app';
import { IAppBackgroundPlugin } from './interfaces/i-plugin';
import { BackgroundManager } from '@core/background/background-manager';
import { isMatchUrls } from './util';

export class AppBackground {
  static init(config: IAppConfig) {
    return new AppBackground({ ...config });
  }

  readonly config: IAppConfig;
  readonly configuration: Configuration;
  readonly backgroundPluginMananger?: BackgroundManager;

  constructor(config: IAppConfig) {
    this.config = config;

    this.configuration = new Configuration();
    this.backgroundPluginMananger = new BackgroundManager();

    const pluginInstances: IAppBackgroundPlugin[] = [];
    for (const Plugin of config.plugins) {
      const plugin = new Plugin();
      pluginInstances.push(plugin);
    }

    for (const pluginInstance of pluginInstances) {
      if (pluginInstance.pluginUrls) {
        if (pluginInstance.pluginUrls) {
          const isMatch = isMatchUrls(pluginInstance.pluginUrls);
          if (!isMatch) continue;
        }
      }

      if (pluginInstance.init) {
        pluginInstance.init();
      }

      if (pluginInstance.registerBackgroundMessager) {
        this.backgroundPluginMananger?.registerMessager.call(
          pluginInstance,
          pluginInstance.registerBackgroundMessager(),
          // this.configuration,
        );
      }
      if (pluginInstance.registerBackgroundActionClicked) {
        this.backgroundPluginMananger?.registerActionClicked.call(
          pluginInstance,
          pluginInstance.registerBackgroundActionClicked(),
          // this.configuration,
        );
      }
    }
  }

  start() {
    return this.backgroundPluginMananger?.start();
  }
}
