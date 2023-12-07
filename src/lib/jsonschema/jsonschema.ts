import type { Options } from 'ajv';
import Ajv from 'ajv';
import ajvKeywords from 'ajv-keywords';
import type { IJSONSchema } from './i-jsonschema';

export type JSONSchemaOption = Options;

/**
 * jsonSchema 服务
 * 封装了 ajv
 */
export class JSONSchema {
  private readonly _ajv: Ajv;

  constructor(options?: JSONSchemaOption) {
    this._ajv = new Ajv(options);
    ajvKeywords(this._ajv);
  }

  validateSchema(schema: IJSONSchema) {
    return this._ajv.validateSchema(schema);
  }

  validate(schema: IJSONSchema, data: any) {
    return this._ajv.validate(schema, data);
  }
}
