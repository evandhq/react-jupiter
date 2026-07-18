import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../typography';
import { Input } from './index.style';
import theme from '../theme';

const RadioOption = (props) => {
  const {
    label, value, isDisabled = false, defaultCheckedValue = '', groupName, register, className = '',
  } = props;
  const itemId = `${groupName}-${value}-${label.split(' ').join('')}`;

  return (
    <ThemeProvider theme={theme}>
      <label htmlFor={itemId} className={className}>
        <Input
          type="radio"
          id={itemId}
          name={groupName}
          defaultValue={value}
          defaultChecked={defaultCheckedValue === value}
          {...register(groupName, {
            disabled: isDisabled,
          })}
        />
        <Text size={14}>
          {label}
        </Text>
      </label>
    </ThemeProvider>
  );
};

export default RadioOption;
