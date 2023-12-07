import { Configuration } from '@core/configuration';
import { SettingRegistyOption } from '../interfaces/i-plugin';

// 配置管理
export class SettingPluginManager {
  private _configuration!: Configuration;
  private _render: any;

  registerRender = (
    renderOption: SettingRegistyOption,
    configuration: Configuration,
  ) => {
    if (this._render) return;
    this._configuration = configuration;
    this._render = renderOption.RenderComponent;
  };

  getRender = () => {
    const RenderComponent = this._render;
    return <RenderComponent configuration={this._configuration} />;
  };
}
