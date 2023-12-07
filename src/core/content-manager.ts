import { Configuration } from '@core/configuration';
import { ContentRenderRegistyOption } from './interfaces/i-plugin';

// 内容插件管理
export class ContentPluginManager {
  private _render: any;

  registerRender = (
    renderOption: ContentRenderRegistyOption,
    configuration: Configuration,
  ) => {
    if (this._render) return;
    this._render = renderOption.render({ configuration });
  };

  getRender = () => {
    return this._render;
  };
}
