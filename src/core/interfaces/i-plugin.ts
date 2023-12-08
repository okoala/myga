import React from 'react';
import { Configuration } from '@core/configuration';

export type SettingRegistyOption = {
  RenderComponent: React.FC<any>;
};

export type ContentRegistyOption = {
  RenderComponent: React.FC<any>;
};

export type BackgroundMessagerRegistyOption = {
  name: string;
  handler: (...args: any[]) => Promise<any>;
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
  // 注册设置渲染
  registerSettingRender?(): SettingRegistyOption;
  // 注册内容渲染
  registerContentRender?(): ContentRegistyOption;
  // 注册背景消息
  registerBackgroundMessager?(): BackgroundMessagerRegistyOption;
}

export interface IPluginCtor {
  new (): IPlugin;
}

export type IPluginProps = {
  configuration: Configuration;
};
