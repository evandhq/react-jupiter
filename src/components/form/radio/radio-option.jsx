import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../typography';
import { Input } from './index.style';
import theme from '../theme';

const RadioOption = ({
  label,
  value,
  isDisabled = false,
  defaultCheckedValue = '',
  inputRef = null,
  groupName,
}) => {
  const itemId = `${groupName}-${value}-${label.split(' ').join('')}`;

  return (
    <ThemeProvider theme={theme}>
      <label htmlFor={itemId}>
        <Input
          type="radio"
          id={itemId}
          name={groupName}
          value={value}
          defaultChecked={defaultCheckedValue === value}
          disabled={isDisabled}
          ref={inputRef}
        />
        <Text size={14}>
          {label}
        </Text>
      </label>
    </ThemeProvider>
  );
};

export default RadioOption;
