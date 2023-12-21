import { Configuration } from '@core/configuration';
import { IAppConfig } from './interfaces/i-app';
import { IAppContentPlugin } from './interfaces/i-plugin';
import { ContentPluginManager } from './content/content-manager';

export class AppContent {
  static init(config: IAppConfig) {
    return new AppContent({ ...config });
  }

  readonly config: IAppConfig;
  readonly configuration: Configuration;
  readonly contentPluginMananger?: ContentPluginManager;

  constructor(config: IAppConfig) {
    this.config = config;

    this.configuration = new Configuration();
    this.contentPluginMananger = new ContentPluginManager();

    const pluginInstances: IAppContentPlugin[] = [];
    for (const Plugin of config.plugins) {
      const plugin = new Plugin();
      pluginInstances.push(plugin);
    }

    for (const pluginInstance of pluginInstances) {
      if (pluginInstance.pluginUrls) {
        let isMatch = false;
        for (const urlPattern of pluginInstance.pluginUrls) {
          const pattern = new globalThis.URLPattern(urlPattern);
          if (pattern.test(document.location.href)) {
            isMatch = true;
            break;
          }
        }
        if (!isMatch) continue;
      }

      if (pluginInstance.init) {
        pluginInstance.init();
      }

      if (pluginInstance.registerContentRender) {
        this.contentPluginMananger?.registerRender.call(
          pluginInstance,
          pluginInstance.registerContentRender(),
          this.configuration,
        );
      }

      if (pluginInstance.registerContentMessager) {
        this.contentPluginMananger?.registerMessager.call(
          pluginInstance,
          pluginInstance.registerContentMessager(),
        );
      }
    }
  }

  start() {
    return this.contentPluginMananger?.getRender();
  }
}
