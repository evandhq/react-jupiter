import React from 'react';
import PropTypes from 'prop-types';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../typography';
import { Input, InputContainer, Label } from './index.style';
import theme from '../theme';

type Props = {
  label: string,
  value: string,
  groupName: string,
  isDisabled?: boolean,
  defaultCheckedValue?: string,
  register: UseFormRegister<FieldValues>;
  control: FormData;
};
const RadioOption = (props: Props) => {
  const {
    label, value, isDisabled = false, defaultCheckedValue = '', groupName, register,
  } = props;
  const itemId = `${groupName}-${value}-${label.split(' ').join('')}`;

  return (
    <ThemeProvider theme={theme}>
      <label htmlFor={itemId}>
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
