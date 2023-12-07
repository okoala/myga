import { Configuration } from '@core/configuration';
import { AppConfig } from './interfaces/i-app';
import { SettingPluginManager } from './setting-manager';
import { IPlugin } from './interfaces/i-plugin';
import { ContentPluginManager } from './content-manager';

export class AppSetup {
  static initContent(config: Omit<AppConfig, 'type'>) {
    return new AppSetup({ ...config, type: 'content' });
  }

  static initSetting(config: Omit<AppConfig, 'type'>) {
    return new AppSetup({ ...config, type: 'setting' });
  }

  static initBackground(config: Omit<AppConfig, 'type'>) {
    return new AppSetup({ ...config, type: 'background' });
  }

  readonly config: AppConfig;
  readonly type: AppConfig['type'];
  readonly configuration: Configuration;
  readonly settingPluginMananger?: SettingPluginManager;
  readonly contentPluginMananger?: ContentPluginManager;

  constructor(config: AppConfig) {
    this.config = config;

    this.type = config.type;
    this.configuration = new Configuration();
    if (this.type === 'setting') {
      this.settingPluginMananger = new SettingPluginManager();
    } else if (this.type === 'content') {
      this.contentPluginMananger = new ContentPluginManager();
    }

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
      if (this.type === 'setting') {
        // 自定义配置渲染页
        if (pluginInstance.registerSettingRender) {
          this.settingPluginMananger?.registerRender.call(
            pluginInstance,
            pluginInstance.registerSettingRender(),
            this.configuration,
          );
        }
      } else if (this.type === 'content') {
        if (pluginInstance.registerContentRender) {
          this.contentPluginMananger?.registerRender.call(
            pluginInstance,
            pluginInstance.registerContentRender(),
            this.configuration,
          );
        }
      }
    }
  }

  render() {
    if (this.type === 'setting') {
      return this.settingPluginMananger?.getRender();
    }
    if (this.type === 'content') {
      return this.contentPluginMananger?.getRender();
    }
    return null;
  }
}
