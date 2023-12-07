import React from 'react';
import { Configuration } from '@core/configuration';
import { ContentRenderRegistyOption } from '../interfaces/i-plugin';

// 内容插件管理
export class ContentPluginManager {
  private _configuration!: Configuration;
  private _renders: React.FC<any>[] = [];

  registerRender = (
    renderOption: ContentRenderRegistyOption,
    configuration: Configuration,
  ) => {
    this._configuration = configuration;
    this._renders.push(renderOption.RenderComponent);
  };

  getRender = () => {
    return this._renders.map(RenderComponent => {
      return <RenderComponent configuration={this._configuration} />;
    });
  };
}
