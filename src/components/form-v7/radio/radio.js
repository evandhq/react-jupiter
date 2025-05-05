import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Controller, UseFormRegister, FieldValues } from 'react-hook-form';
import GlobalStyle from '../../globalStyle';
import ErrorMsg from '../errorMsg';
import { RadioWrapper } from './index.style';
import { Fieldset } from '../index.style';
import Label from '../label';
import theme from '../theme';
import { Text } from '../../typography';

type Props = {
  children: * => Node,
  groupName?: string,
  label?: string,
  handleChange?: () => void,
  defaultCheckedValue?: string,
  isDisabled?: boolean,
  type?: 'horizontal' | 'vertical',
  required?: boolean,
  register: UseFormRegister<FieldValues>;
  number?: number,
  control: FormData;
};

const Radio = ({
  groupName = 'radio-element',
  label = '',
  handleChange = () => { },
  defaultCheckedValue = '',
  isDisabled = false,
  type = 'horizontal',
  required = false,
  number = null,
  control,
  register,
  children,
}: Props) => {
  const radioElements = React.Children.toArray(children);

  return (
    <ThemeProvider theme={theme}>
      <Fieldset onChange={handleChange}>
        <GlobalStyle />
        <Label label={label} number={number} required={required} />
        <Controller
          name={groupName}
          control={control}
          rules={{ required: required ? 'این فیلد اجباری است' : false }}
          render={({ fieldState }) => (
            <>
              <RadioWrapper type={type}>
                {radioElements.map(
                  (radioElement) => (
                    isDisabled ? (
                      React.cloneElement(radioElement, {
                        groupName, defaultCheckedValue, isDisabled, register,
                      })
                    ) : (
                      React.cloneElement(radioElement, { groupName, defaultCheckedValue, register })
                    )
                  ),
                )}
              </RadioWrapper>
              <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
            </>
          )}
        />
      </Fieldset>
    </ThemeProvider>
  );
};

export default Radio;
