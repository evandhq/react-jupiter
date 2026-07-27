import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Text } from '../../typography';
import { Input } from './index.style';
import { DEFAULT_SIZE } from '../sizes';

const CheckboxOption = (props) => {
  const { label, value, isDisabled = false, isChecked = false, groupName, register, handleOnchange, className = '', size = DEFAULT_SIZE } = props;
  const itemId = `${groupName}-${value}`;

  return (
    <ThemeProvider theme={theme}>
      <label className={`flex gap-2 ${className}`} htmlFor={itemId}>
        <Input
          type="checkbox"
          id={itemId}
          name={groupName}
          value={value}
          defaultChecked={isChecked}
          size={size}
          {...register(groupName, {
            disabled: isDisabled,
            onChange: (handleOnchange),
          })}
        />
        <Text size={14}>
          {label}
        </Text>
      </label>
    </ThemeProvider>
  );
};

export default CheckboxOption;
