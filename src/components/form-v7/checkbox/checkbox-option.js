import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Text } from '../../typography';
import { Input } from './index.style';

type Props = {
  label: string,
  value: string,
  groupName: string,
  isDisabled?: boolean,
  isChecked?: boolean,
  register?: any,
};
const CheckboxOption = (props: Props) => {
  const {
    label, value, isDisabled, isChecked, groupName, register,
  } = props;
  const itemId = `${groupName}-${value}-${label.split(' ').join('')}`;

  return (
    <ThemeProvider theme={theme}>
      <label htmlFor={itemId}>
        <Input
          type="checkbox"
          id={itemId}
          name={groupName}
          value={value}
          defaultChecked={isChecked}
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

CheckboxOption.defaultProps = {
  isDisabled: false,
  isChecked: false,
  inputRef: null,
};

export default CheckboxOption;
