import type { IConfigurationNode } from './interface/i-configuration';
import { ConfigurationRegistry } from './configuration-registry';
import { ConfigurationModel } from './configuration-model';

export class Configuration {
  private readonly _configurationRegistry!: ConfigurationRegistry;
  private readonly _configurationModel!: ConfigurationModel;

  constructor() {
    this._configurationRegistry = new ConfigurationRegistry();
    this._configurationModel = new ConfigurationModel();
  }

  /**
   * 注册新的配置
   */
  public registerConfiguration(configuration: IConfigurationNode) {
    this._configurationRegistry.register(configuration);
  }

  /**
   * 注册默认值
   */
  public registerDefaultValue(defaultValue: any) {
    this._configurationModel.registerDefaultValue(defaultValue);
  }

  /**
   * 设置值
   */
  public setValue(keyPath: string | Record<string, any>, val?: any): void {
    if (typeof keyPath === 'object') {
      const keys = Object.keys(keyPath);
      for (const key of keys) {
        this._configurationModel.setValue(key, keyPath[key]);
      }
    } else if (typeof keyPath === 'string') {
      this._configurationModel.setValue(keyPath, val);
    }
  }

  /**
   * 获取值
   */
  public getValue<T>(keyPath?: string) {
    return this._configurationModel.getValue(keyPath) as T;
  }

  /**
   * 获取所有值
   */
  public getAllValues() {
    return this._configurationModel.getValues();
  }

  public getSchema() {
    return this._configurationRegistry.getSchema();
  }
}
