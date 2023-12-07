export type JSONSchemaType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'null'
  | 'array'
  | 'object';

export type JSONSchemaTypeOf =
  | 'undefined'
  | 'string'
  | 'number'
  | 'object'
  | 'function'
  | 'boolean'
  | 'symbol';

export type JSONSchemaInstanceOf =
  | 'Object'
  | 'Array'
  | 'Function'
  | 'Number'
  | 'String'
  | 'Date'
  | 'RegExp'
  | 'Promise';

/**
 * 数据表使用到的 jsonschema 接口定义
 * 包括扩展的定义
 */
export interface IJSONSchema {
  id?: string;
  $id?: string;
  // JSON Schema 中的 $schema 关键字必须在 JSON Schema 文档的根结点上，值必须符合 URI 和 json-reference 规范，必须是绝对路径且经过字符串标准化处理（normalize）。这一关键字有两个作用，一是标识当前 JSON Schema 的版本，二是表明从 $schema 所在的根结点位置开始，是一个独立的 JSON Schema 文档，实现多份 JSON Schema 文档嵌套表示的能力。
  $schema?: string;

  $ref?: string;
  // schema短标题
  title?: string;
  // schema长描述
  description?: string;
  // 指定默认值
  default?: any;

  /**
   * Validation - object
   */
  // 属性定义
  properties?: IJSONSchemaMap;
  // 属性名为正则的属性定义
  patternProperties?: IJSONSchemaMap;
  // 额外属性定义
  additionalProperties?: boolean | IJSONSchema;
  // 对象最大属性个数
  maxProperties?: number;
  // 对象最小属性个数
  minProperties?: number;
  // 分为 schema 依赖和属性依赖
  dependencies?: IJSONSchemaMap | { [prop: string]: string[] };

  /**
   * Validation - number
   */
  // integer 且大于 0
  // 整数可被该值整除
  multipleOf?: number;
  // integer 最大值
  maximum?: number;
  // boolean 不含最大值，默认为 false
  exclusiveMaximum?: boolean | number;
  // integer 最小值
  minimum?: number;
  // boolean 不含最小值，默认为 false
  exclusiveMinimum?: boolean | number;

  /**
   * Validation - string
   */
  // integer 且大于等于 0，字符串的最大长度
  maxLength?: number;
  // integer 且大于等于 0, 字符串最小长度
  minLength?: number;
  // 正则表达式, 字符串正则匹配
  pattern?: string;

  /**
   * Validation - array
   */
  // schema或array, 数组元素定义
  items?: IJSONSchema | IJSONSchema[];
  // boolean 或 schema, 额外数组元素定义
  additionalItems?: boolean | IJSONSchema;
  // integer 且大于等于 0, 数组最大元素个数
  maxItems?: number;
  // integer 且大于等于 0, 数组最小元素个数, 默认为 0
  minItems?: number;
  // boolean, 数组所有元素唯一, 默认为 false
  uniqueItems?: boolean;
  // array 至少 1 元素, 元素为 string 且唯一, 必须出现的属性集
  required?: string[];

  /**
   * Validation - all
   */
  // 枚举，array 至少 1 元素，元素唯一
  enum?: any[];
  // 数据类型
  type?: JSONSchemaType | JSONSchemaType[];
  // 扩展js类型判断
  typeof?: JSONSchemaTypeOf | JSONSchemaTypeOf[];
  // 扩展实例判断
  instanceof?: JSONSchemaInstanceOf | JSONSchemaInstanceOf[];
  // 通过所有验证
  allOf?: IJSONSchema[];
  // 通过任一验证
  anyOf?: IJSONSchema[];
  // 只通过一个验证
  oneOf?: IJSONSchema[];
  // 不通过该验证
  not?: IJSONSchema;
  // object, 属性为 schema
  definitions?: IJSONSchemaMap;

  // JSON Schema 原生支持 6 种 format
  // date-tiem, email, hostname, ipv4, ipv6, uri
  format?: string;
}

export type IJSONSchemaMap = {
  [name: string]: IJSONSchema;
};
