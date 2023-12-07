import { Configuration } from '@core/configuration';
import { SettingRenderRegistyOption } from './interfaces/i-plugin';

// 配置管理
export class SettingPluginManager {
  private _render: any;

  registerRender = (
    renderOption: SettingRenderRegistyOption,
    configuration: Configuration,
  ) => {
    if (this._render) return;
    this._render = renderOption.render({ configuration });
  };

  getRender = () => {
    return this._render;
  };
}
