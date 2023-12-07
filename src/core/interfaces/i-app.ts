import { IPluginCtor } from './i-plugin';

type AppType = 'setting' | 'content' | 'background';

export type AppConfig = {
  type: AppType;
  plugins: IPluginCtor[];
};
