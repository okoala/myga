import { IPlugin } from '@core';
import { Configuration } from '@core/configuration';

export class DocBeautifyPlugin implements IPlugin {
  pluginId = 'doc-beautify';
  pluginName = '文档美化';
  pluginDesc = '优化文档布局，显示更加美观';

  registerConfiguraion(configuration: Configuration): void {
    configuration.registerConfiguration({
      id: this.pluginId,
      title: this.pluginName,
      description: this.pluginDesc,
    });
  }
}
