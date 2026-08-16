import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../typography';
import { Input, RadioLabel } from './index.style';
import theme from '../theme';
import { DEFAULT_SIZE } from '../sizes';

const RadioOption = (props) => {
  const {
    label, value, isDisabled = false, defaultCheckedValue = '', groupName, register, className = '', size = DEFAULT_SIZE,
    suffix = null,
  } = props;
  const itemId = `${groupName}-${value}-${label.split(' ').join('')}`;

  return (
    <ThemeProvider theme={theme}>
      <RadioLabel htmlFor={itemId} className={`gap-2 ${className}`}>
        <Input
          type="radio"
          id={itemId}
          name={groupName}
          defaultValue={value}
          defaultChecked={defaultCheckedValue === value}
          size={size}
          {...register(groupName, {
            disabled: isDisabled,
          })}
        />
        <Text size={14}>
          {label}
        </Text>
        {suffix}
      </RadioLabel>
    </ThemeProvider>
  );
};

export default RadioOption;
