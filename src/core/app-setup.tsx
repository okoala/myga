import { Configuration } from '@core/configuration';
import { AppConfig } from './interfaces/i-app';
import { SettingPluginManager } from './setting-manager';
import { IPlugin } from './interfaces/i-plugin';

export class AppSetup {
  static init(config: AppConfig) {
    return new AppSetup(config);
  }

  readonly config: AppConfig;
  readonly configuration: Configuration;
  readonly settingPluginMananger: SettingPluginManager;

  constructor(config: AppConfig) {
    this.config = config;

    this.configuration = new Configuration();
    this.settingPluginMananger = new SettingPluginManager();

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
      // 自定义配置渲染页
      if (pluginInstance.registerSettingRender) {
        this.settingPluginMananger.registerRender.call(
          pluginInstance,
          pluginInstance.registerSettingRender(),
          this.configuration,
        );
      }
    }
  }

  renderSetting() {
    return this.settingPluginMananger?.getRender();
  }
}
