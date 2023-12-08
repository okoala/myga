import { Configuration } from '@core/configuration';
import { IAppConfig } from './interfaces/i-app';
import { IPlugin } from './interfaces/i-plugin';
import { BackgroundManager } from '@core/background/background-manager';

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

    const pluginInstances: IPlugin[] = [];
    for (const Plugin of config.plugins) {
      const plugin = new Plugin();
      // 自定义配置
      if (plugin.registerConfiguraion) {
        plugin.registerConfiguraion.call(plugin, this.configuration);
      }
      pluginInstances.push(plugin);
    }

    for (const pluginInstance of pluginInstances) {
      if (pluginInstance.registerBackgroundMessager) {
        this.backgroundPluginMananger?.registerBackgroundMessager.call(
          pluginInstance,
          pluginInstance.registerBackgroundMessager(),
          // this.configuration,
        );
      }
    }
  }

  start() {
    return this.backgroundPluginMananger?.start();
  }
}
