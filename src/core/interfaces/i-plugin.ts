import React from 'react';
import { Configuration } from '@core/configuration';

export type SettingRegistyOption = {
  RenderComponent: React.FC<any>;
};

export type ContentRegistyOption = {
  RenderComponent: React.FC<any>;
};

export type SidepanelRenderRegistyOption = {
  RenderComponent: React.FC<any>;
};

export type SidepanelItemRegistyOption = {
  id: string;
  title: string;
  icon: React.ReactNode | string;
  description?: string;
  RenderComponent: React.FC<any>;
};

export type SidepanelFooterItemRegistyOption = {
  // 底部名称
  RenderComponent: React.FC<any> | React.ReactNode;
};

export type BackgroundMessagerRegistyOption = {
  name: string;
  handler: (...args: any[]) => Promise<any>;
};

export type ContentMessagerRegistyOption = {
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
  // 插件有效的 urls
  pluginUrls?: string[];
  // 注册配置信息
  registerConfiguraion?(configuration: Configuration): void;
  // 注册设置渲染
  registerSettingRender?(): SettingRegistyOption;
  // 注册内容渲染
  registerContentRender?(): ContentRegistyOption;
  // 注册侧边栏渲染
  registerSidepanelRender?(): SidepanelRenderRegistyOption;
  // 注册侧边栏渲染
  registerSidepanelItem?(): SidepanelItemRegistyOption;
  // 注册侧边栏渲染
  registerSidepanelFooterItem?(): SidepanelFooterItemRegistyOption;
  // 注册 background 消息
  registerBackgroundMessager?(): BackgroundMessagerRegistyOption;
  // 注册 content 消息
  registerContentMessager?(): ContentMessagerRegistyOption;
}

export interface IPluginCtor {
  new (): IPlugin;
}

export type IPluginProps = {
  configuration: Configuration;
};
