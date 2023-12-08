import { IPluginCtor } from './i-plugin';
// import { IConfigurationNode } from '@core/configuration';

export interface IApp {
  start(): void;
}

export type AppType = 'setting' | 'content' | 'background';

export type IAppConfig = {
  plugins: IPluginCtor[];
  // configs?: { schema: IConfigurationNode; defaultValue: Record<string, any> }[];
};
