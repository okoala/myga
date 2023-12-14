import React from 'react';
import { Configuration } from '@core/configuration';
import {
  SidepanelFooterItemRegistyOption,
  SidepanelItemRegistyOption,
  SidepanelRenderRegistyOption,
} from '../interfaces/i-plugin';

// 配置管理
export class SidepanelPluginManager {
  private _configuration!: Configuration;
  private _render!: React.FC<any>;
  private _sidepanels!: SidepanelItemRegistyOption[];
  private _footers!: SidepanelFooterItemRegistyOption[];

  registerSidepanelRender = (render: SidepanelRenderRegistyOption) => {
    this._render = render.RenderComponent;
  };

  registerSidepanelItem = (
    sidepanel: SidepanelItemRegistyOption,
    configuration: Configuration,
  ) => {
    this._sidepanels.push(sidepanel);
    this._configuration = configuration;
  };

  registerSidepanelFooterItem = (footer: SidepanelFooterItemRegistyOption) => {
    this._footers.push(footer);
  };

  getRender = () => {
    const RenderComponet = this._render;
    return (
      <RenderComponet navItems={this._sidepanels} footerItems={this._footers} />
    );
  };
}
