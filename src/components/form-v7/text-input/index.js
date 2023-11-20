// @flow

import React, { useState } from 'react';
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
  value?: string | number,
}

const TextInput = (props: Props) => {
  const {
    type,
    label,
    htmlElementName,
    id,
    placeholder,
    disabled,
    description,
    register,
    required,
    number,
    rtl,
    control,
    value,
  } = props;

  const [displayedPassword, setDisplayedPassword] = useState(false);

  function handleDisplayPassword() {
    setDisplayedPassword(!displayedPassword);
  }

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
          render={({ fieldState }) => (
            <>
              {type === 'password' && (
                <PasswordIcon
                  name={displayedPassword ? 'visibility-off' : 'visibility'}
                  color={displayedPassword ? 'blue' : 'gray'}
                  onClick={handleDisplayPassword}
                />
              )}
              <Input
                id={id || `${type}-${htmlElementName.split(' ').join('')}`}
                name={htmlElementName}
                type={displayedPassword || type === 'text' ? 'text' : 'password'}
                placeholder={placeholder}
                defaultValue={value}
                rtl={rtl}
                {...register(htmlElementName, {
                  // onChange: handleChange,
                  onFocus: handleFocus,
                  disabled,
                })}
              />
              <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
            </>
          )}
        />
      </Fieldset>
    </ThemeProvider>
  );
};

TextInput.defaultProps = {
  type: 'text',
  label: null,
  id: null,
  placeholder: null,
  disabled: false,
  description: null,
  required: false,
  number: null,
  rtl: true,
  value: '',
};

export default TextInput;
