import type { IJSONSchema, JSONSchemaType } from '@lib/jsonschema';

// 配置的 schema 扩展自 jsonschema
export type IConfigurationPropertySchema = IJSONSchema;

export interface IConfigurationNode {
  id?: string;
  type?: JSONSchemaType | JSONSchemaType[] | undefined;
  title?: string;
  description?: string;
  properties?: Record<string, IConfigurationPropertySchema>;
  allOf?: IConfigurationNode[];
  restrictedProperties?: string[];
}

export type ConfigurationEvent = {
  type: string;
  path: string;
  pre: any;
  cur: any;
};
