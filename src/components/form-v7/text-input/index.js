// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import GlobalStyle from '../../globalStyle';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import Label from '../label';
import {
  Input,
  DescriptionContainer,
  PasswordIcon,
} from './index.style';
import { Fieldset } from '../index.style';
import { fixNumbers } from '../../utils/numbers';

type Props = {
  type?: 'text' | 'password',
  label?: string,
  htmlElementName: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  description?: string,
  register: UseFormRegister<FieldValues>;
  control: FormData;
  required?: boolean | String,
  number?: number,
  rtl?: boolean,
  onFocus?: (e: FocusEvent) => void,
  readOnly?: boolean,
}

const TextInput = ({
  type = 'text',
  label = null,
  htmlElementName,
  id = null,
  placeholder = null,
  disabled = false,
  description = null,
  required = false,
  number = null,
  rtl = true,
  onFocus = () => {},
  readOnly = false,
  register,
  control,
}: Props) => {
  function handleFocus(e) {
    e.target.setSelectionRange(0, 0);
  }

  return (
    <ThemeProvider theme={theme}>
      <Fieldset>
        <GlobalStyle />
        <Label htmlFor={id || `${type}-${htmlElementName.split(' ').join('')}`} label={label} number={number} required={required} />
        {description && (
        <DescriptionContainer size={10} color="gray" data-test="text-input-description">
          {description}
        </DescriptionContainer>
        )}
        <Controller
          name={htmlElementName}
          control={control}
          rules={{ required: required ? 'این فیلد اجباری است' : false }}
          render={({ field: { value }, fieldState }) => (
            <>
              {type === 'password' && (
                <PasswordIcon
                  name="visibility"
                  color="gray"
                />
              )}
              <Input
                id={id || `${type}-${htmlElementName.split(' ').join('')}`}
                name={htmlElementName}
                type={type === 'text' ? 'text' : 'password'}
                placeholder={placeholder}
                defaultValue={value}
                rtl={rtl}
                {...register(htmlElementName, {
                  onFocus: handleFocus,
                  disabled,
                  onChange: (e) => fixNumbers(e),
                })}
                onFocus={onFocus}
                readOnly={readOnly}
              />
              <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
            </>
          )}
        />
      </Fieldset>
    </ThemeProvider>
  );
};

export default TextInput;
