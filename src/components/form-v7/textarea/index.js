import React from 'react';
import PropTypes from 'prop-types';
import { UseFormRegister, FieldValues, Controller } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import Label from '../label';
import StyledTextarea from './index.style';
import { Fieldset } from '../index.style';

type Props = {
  htmlElementName?: string,
  label?: string,
  isDisabled?: Boolean,
  defaultValue?: string,
  placeholder?: string,
  resize?: 'horizontal' | 'vertical' | 'none' | 'both',
  minHeight?: number,
  handleChange?: () => void,
  register: UseFormRegister<FieldValues>;
  required?: boolean | String,
  number?: number,
  control: FormData;
};

const Textarea = ({
  htmlElementName = 'textarea-element',
  label = '',
  isDisabled = false,
  defaultValue = '',
  placeholder = '',
  resize = 'none',
  minHeight = 120,
  handleChange = () => { },
  required = false,
  number = null,
  register,
  control,
}: Props) => (
  <ThemeProvider theme={theme}>
    <Fieldset>
      <GlobalStyle />
      <Label htmlFor={htmlElementName} label={label} number={number} required={required} />

      <Controller
        name={htmlElementName}
        control={control}
        rules={{ required: required ? 'این فیلد اجباری است' : false }}
        render={({ fieldState }) => (
          <>
            <StyledTextarea
              name={htmlElementName}
              placeholder={placeholder}
              resize={resize}
              defaultValue={defaultValue}
              minHeight={minHeight}
              {...register(htmlElementName, {
                onChange: handleChange,
                disabled: isDisabled,
              })}
            />
            <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
          </>
        )}
      />
    </Fieldset>
  </ThemeProvider>
);

export default Textarea;
