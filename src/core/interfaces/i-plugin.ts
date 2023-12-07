import React from 'react';
import { Configuration } from '@core/configuration';

export type SettingRenderRegistyOption = {
  render: React.ReactElement;
};

export interface IPlugin {
  // 插件id
  pluginId: string;
  // 插件名称
  pluginName: string;
  // 插件描述
  pluginDesc?: string;
  // 注册配置信息
  registerConfiguraion?(configuration: Configuration): void;
  // 注册设置渲染页
  registerSettingRender?(): SettingRenderRegistyOption;
}

export interface IPluginCtor {
  new (): IPlugin;
}

export type IPluginProps = {
  configuration: Configuration;
};
