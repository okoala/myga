import React, { useState } from 'react';
import { Input } from 'antd';

interface NumericInputProps {
  size: string;
  defaultValue: string;
  style?: React.CSSProperties;
  onChange: (value: string) => void;
}

export const NumericInput = (props: NumericInputProps) => {
  const { onChange, defaultValue, ...otherProps } = props;
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      setValue(inputValue);
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    const _value = valueTemp.replace(/0*(\d+)/, '$1');
    setValue(_value);
    onChange(_value);
  };

  return (
    <Input
      {...otherProps}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="输入数字"
      maxLength={16}
    />
  );
};
