import type {
  IConfigurationNode,
  IConfigurationPropertySchema,
} from './interface/i-configuration';
import { stringToPath } from './util';

/**
 * 提供配置的注册和校验
 */
export class ConfigurationRegistry {
  private readonly _configurationProperties: Record<
    string,
    IConfigurationNode
  > = {};

  getSchema() {
    return {
      title: 'okrrr 插件设置',
      type: 'object',
      properties: this._configurationProperties,
    };
  }

  /**
   * 注册配置
   */
  public register(configuration: IConfigurationNode) {
    this._doRegister(configuration);
  }

  /**
   * 执行注册
   */
  private _doRegister(configuration: IConfigurationNode) {
    const configurationId = configuration.id;
    if (!configurationId) {
      throw new Error(
        `配置不合法: ${JSON.stringify(configuration)}, configuration.id 是必填`,
      );
    }

    const configurationIds = configurationId.split('.');
    if (configurationIds.length === 1) {
      this._configurationProperties[configurationIds[0]] = configuration;
    } else {
      if (!this._configurationProperties[configurationIds[0]]) {
        this._configurationProperties[configurationIds[0]] = {
          id: configurationIds[0],
          type: 'object',
          properties: {},
        };
      } else if (
        !this._configurationProperties[configurationIds[0]].properties
      ) {
        this._configurationProperties[configurationIds[0]].properties = {};
      }
      let _properties =
        this._configurationProperties[configurationIds[0]].properties!;
      configurationIds.forEach((id, index) => {
        if (index === 0) return;
        if (_properties[id]) {
          if (!_properties[id].properties) _properties[id].properties = {};
          _properties = _properties[id].properties as Record<
            string,
            IConfigurationPropertySchema
          >;
        } else {
          if (index === configurationIds.length - 1) {
            _properties[id] = configuration;
          } else {
            const _ids = configurationIds.slice(index + 1);
            _properties[id] = {
              id: _ids.join('.'),
              type: 'object',
              properties: {},
            };
          }
        }
      });
    }
  }

  /**
   * 获取配置
   */
  public getProperty(keyPath: string) {
    const path = stringToPath(keyPath);
    const [id, ...keys] = path;
    let result: any = this._configurationProperties[id];
    let keyPrefix = id;
    // 优先匹配 { 'a.b.c': 222 }
    // 次匹配 { a: { b: { c: 111 } } }
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      keyPrefix += '.' + key;
      if (!result) return null;
      // 如果是数字，说明是
      if (/^\d+$/g.test(key)) {
        result = result?.items;
      } else if (result.properties) {
        const names = Object.keys(result.properties);
        let matched = false;
        for (let j = 0; j < names.length; j++) {
          const name = names[j];
          const nameWithId = id + '.' + name;
          if (nameWithId === keyPrefix) {
            result = result.properties[name];
            matched = true;
            break;
          } else if (nameWithId.startsWith(keyPrefix)) {
            matched = true;
            break;
          }
        }
        if (matched) continue;
        result = result.properties[key];
      }
    }

    return result;
  }

  /**
   * 验证数据是否合法
   */
  public validate(keyPath: string, data?: any) {
    const propertySchema = this.getProperty(keyPath);
    if (!propertySchema) {
      // console.warn(`配置找不到, ${keyPath}`);
      return false;
    }

    return true;
  }
}
