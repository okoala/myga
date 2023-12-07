import React from 'react';
import { Checkbox, Input, Select, Button } from 'antd';
import { NumericInput } from '../numeric-input';

const { TextArea } = Input;

function getValue(keyPath, data) {
  const keys = keyPath.split('.');
  let cur = data;
  for (const key of keys) {
    if (cur[key] != null) {
      cur = cur[key];
    } else {
      return null;
    }
  }
  return cur;
}

export const SettingField = props => {
  const handleChange = value => {
    const target = {
      type: props.type,
      keyPath: props.keyPath,
      value,
    };
    props.onChange?.(target);
  };
  const defaultValue = getValue(props.keyPath, props.data);

  if (props.type === 'object') return null;

  let content;
  if (props.type === 'boolean') {
    content = (
      <Checkbox
        defaultChecked={defaultValue}
        onChange={e => handleChange(e.target.checked)}
      >
        <span>{props.text}</span>
      </Checkbox>
    );
  } else if (props.type === 'string') {
    content = (
      <div className="setting-form-string">
        {props.text}
        {props.enum ? (
          <Select
            size="small"
            onChange={handleChange}
            defaultValue={defaultValue}
            options={props.enum.map(item => ({
              value: item,
              label: item,
            }))}
          ></Select>
        ) : (
          <TextArea
            size="small"
            autoSize={{ minRows: 2, maxRows: 6 }}
            defaultValue={defaultValue}
            onChange={e => handleChange(e.target.value)}
          />
        )}
      </div>
    );
  } else if (props.type === 'number') {
    content = (
      <div className="setting-form-number">
        {props.text}
        <NumericInput
          size="small"
          defaultValue={defaultValue}
          onChange={value => handleChange(value)}
        />
      </div>
    );
  } else if (props.type === 'array') {
    content = (
      <div className="setting-form-array">
        {props.text}
        <TextArea
          size="small"
          autoSize={{ minRows: 2, maxRows: 6 }}
          defaultValue={defaultValue}
          onChange={e => handleChange(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className="setting-form-setting">
      <div className="setting-form-setting-content">{content}</div>
    </div>
  );
};

export const SettingForm = props => {
  const schema = props.schema;
  console.log(schema);

  return (
    <div>
      <h1 className="setting-form-title">
        {schema.title}
        <Button
          className="setting-form-reset"
          size="small"
          onClick={props.onReset}
        >
          重置配置
        </Button>
      </h1>
      {Object.keys(schema.properties).map(moduleName => {
        const module = schema.properties[moduleName];
        return (
          <div className="setting-form-item">
            <h2 className="setting-form-subtitle">
              {module.title || module.description}
              <span className="setting-form-id">{moduleName}</span>
            </h2>
            <div>
              {module.properties ? (
                Object.keys(module.properties).map(settingName => {
                  const setting = module.properties[settingName];

                  const result = (
                    <SettingField
                      keyPath={`${moduleName}.${settingName}`}
                      text={setting.title || setting.description}
                      type={setting.type}
                      enum={setting.enum}
                      data={props.data}
                      onChange={props.onChange}
                    />
                  );

                  let values: any[] = [];
                  if (setting.properties) {
                    values = Object.keys(setting.properties).map(
                      subSettingName => {
                        const subSetting = setting.properties[subSettingName];
                        return (
                          <SettingField
                            keyPath={`${moduleName}.${settingName}.${subSettingName}`}
                            text={subSetting.title || subSetting.description}
                            type={subSetting.type}
                            enum={subSetting.enum}
                            data={props.data}
                            onChange={props.onChange}
                          />
                        );
                      },
                    );
                  }

                  return [result, ...values];
                })
              ) : (
                <SettingField
                  keyPath={moduleName}
                  type={module.type}
                  enum={module.enum}
                  data={props.data}
                  onChange={props.onChange}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
