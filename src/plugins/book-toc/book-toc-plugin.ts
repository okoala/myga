import { IPlugin } from '@core';
import { Configuration } from '@core/configuration';

export class BookTocPlugin implements IPlugin {
  pluginId = 'book-toc';
  pluginName = '目录功能优化';
  pluginDesc = '支持在最下面新建文档等';

  registerConfiguraion(configuration: Configuration): void {
    configuration.registerConfiguration({
      id: this.pluginId,
      title: this.pluginName,
      description: this.pluginDesc,
    });
  }
}
