import React from 'react';
import { Configuration } from '@core/configuration';
import { SidepanelRegistyOption } from '../interfaces/i-plugin';
import { Sidebar } from './components/sidebar';

// 配置管理
export class SidepanelPluginManager {
  private _configuration!: Configuration;
  private _sidepanels: any;
  private _footers!: React.FC<any>[];

  registerSidepanel = (
    sidepanel: SidepanelRegistyOption,
    configuration: Configuration,
  ) => {
    this._sidepanels.push(sidepanel);
    this._configuration = configuration;
  };

  registerSidepanelFooter = (footer: React.FC<any>) => {
    this._footers.push(footer);
  };

  getRender = () => {
    return <Sidebar navItems={this._sidepanels} footerItems={this._footers} />;
  };
}
