import { IPluginCtor } from './i-plugin';

export type AppConfig = {
  plugins: IPluginCtor[];
};
