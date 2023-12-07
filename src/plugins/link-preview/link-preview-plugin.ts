import { IPlugin } from '@core';
import { Configuration } from '@core/configuration';

export class LinkPreviewPlugin implements IPlugin {
  pluginId = 'link-preview';
  pluginName = '链接预览';
  pluginDesc = '悬浮到语雀链接上可以快速预览内容';

  registerConfiguraion(configuration: Configuration): void {
    configuration.registerConfiguration({
      id: this.pluginId,
      title: this.pluginName,
      description: this.pluginDesc,
    });
  }
}
