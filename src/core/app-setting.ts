import { Configuration } from '@core/configuration';
import { IApp, IAppConfig } from './interfaces/i-app';
import { SettingPluginManager } from './setting/setting-manager';
import { IAppSettingPlugin, IPlugin } from './interfaces/i-plugin';

export class AppSetting implements IApp {
  static init(config: IAppConfig) {
    return new AppSetting({ ...config });
  }

  readonly config: IAppConfig;
  readonly configuration: Configuration;
  readonly settingPluginMananger?: SettingPluginManager;

  constructor(config: IAppConfig) {
    this.config = config;

    this.configuration = new Configuration();
    this.settingPluginMananger = new SettingPluginManager();

    const pluginInstances: IAppSettingPlugin[] = [];
    for (const Plugin of config.plugins) {
      const plugin = new Plugin();
      pluginInstances.push(plugin);
    }

    for (const pluginInstance of pluginInstances) {
      // 自定义配置渲染页
      if (pluginInstance.registerSettingRender) {
        this.settingPluginMananger?.registerRender.call(
          pluginInstance,
          pluginInstance.registerSettingRender(),
          this.configuration,
        );
      }
    }
  }

  start() {
    return this.settingPluginMananger?.getRender();
  }
}
