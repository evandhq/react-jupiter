import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import GlobalStyle from '../../globalStyle';
import ErrorMsg from '../errorMsg';
import Label from '../label';
import { Fieldset } from '../index.style';
import { ToggleWrapper, ToggleLabel, ToggleInput, ToggleSlider } from './index.style';
import theme from '../theme';
import { DEFAULT_SIZE } from '../sizes';

const Toggle = ({
  name = 'toggle-element',
  label = '',
  isDisabled = false,
  required = false,
  number = null,
  type = 'horizontal',
  control,
  register,
  className = '',
  size = DEFAULT_SIZE,
}) => (
  <ThemeProvider theme={theme}>
    <Fieldset className={className}>
      <GlobalStyle />
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? 'این فیلد اجباری است' : false }}
        render={({ fieldState }) => (
          <>
            <ToggleWrapper type={type}>
              {type === 'vertical' && (
                <Label label={label} number={number} required={required} />
              )}
              <ToggleLabel disabled={isDisabled} size={size}>
                <ToggleInput
                  type="checkbox"
                  disabled={isDisabled}
                  size={size}
                  {...register(name, {
                    disabled: isDisabled,
                  })}
                />
                <ToggleSlider disabled={isDisabled} size={size} />
              </ToggleLabel>
              {type === 'horizontal' && label && (
                <Label label={label} number={number} required={required} />
              )}
            </ToggleWrapper>
            <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
          </>
        )}
      />
    </Fieldset>
  </ThemeProvider>
);

export default Toggle;
