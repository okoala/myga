import { IPluginCtor } from './i-plugin';

export interface IApp {
  start(): void;
}

export type AppType = 'setting' | 'content' | 'background';

export type IAppConfig = {
  plugins: IPluginCtor[];
};
