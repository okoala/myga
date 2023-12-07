import { merge, set, get } from 'lodash';
import { ConfigurationRegistry } from './configuration-registry';

/**
 * 提供配置数据处理
 */
export class ConfigurationModel {
  private _configurationRegistry!: ConfigurationRegistry;

  // 默认数据
  private readonly _defaultModel: Record<string, any> = {};
  // 重写的数据
  private readonly _overrideModel: Record<string, any> = {};

  /**
   * 注册默认值
   */
  public registerDefaultValue(value: any) {
    const keys = Object.keys(value);
    // 校验数据是否合法
    for (const key of keys) {
      this._configurationRegistry.validate(key, value[key]);
    }

    // 赋值
    for (const key of keys) {
      set(this._defaultModel, key, value[key]);
    }
  }

  /**
   * 设置配置
   */
  public setValue(keyPath: string, val: any) {
    this._configurationRegistry.validate(keyPath, val);
    return set(this._overrideModel, keyPath, val);
  }

  /**
   * 获取配置
   */
  public getValue(keyPath?: string) {
    if (!keyPath) {
      return this.getValues();
    }

    this._configurationRegistry.validate(keyPath);
    const val = get(this._overrideModel, keyPath);
    if (val !== undefined) return val;
    return get(this._defaultModel, keyPath);
  }

  /**
   * 返回所有数据
   */
  public getValues() {
    return merge({}, this._defaultModel, this._overrideModel);
  }
}
