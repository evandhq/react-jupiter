import React from 'react';
import PropTypes from 'prop-types';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Text } from '../../typography';
import { Input, InputContainer, Label } from './index.style';

type Props = {
  label: string,
  value: string,
  groupName: string,
  isDisabled?: boolean,
  isChecked?: boolean,
  register: UseFormRegister<FieldValues>;
};
const CheckboxOption = ({
  label, value, isDisabled = false, isChecked = false, groupName, register, handleOnchange,
}: Props) => {
  const itemId = `${groupName}-${value}`;

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
