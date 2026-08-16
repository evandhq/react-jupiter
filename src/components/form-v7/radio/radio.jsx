import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import GlobalStyle from '../../globalStyle';
import ErrorMsg from '../errorMsg';
import { RadioWrapper } from './index.style';
import { Fieldset } from '../index.style';
import Label from '../label';
import theme from '../theme';
import { DEFAULT_SIZE } from '../sizes';

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
  className = '',
  size = DEFAULT_SIZE,
  wrapperClassName = 'justify-between',
}) => {
  const radioElements = React.Children.toArray(children);

  return (
    <ThemeProvider theme={theme}>
      <Fieldset onChange={handleChange} className={className}>
        <GlobalStyle />
        <Label label={label} number={number} required={required} />
        <Controller
          name={groupName}
          control={control}
          rules={{ required: required ? 'این فیلد اجباری است' : false }}
          render={({ fieldState }) => (
            <>
              <RadioWrapper type={type} className={wrapperClassName}>
                {radioElements.map(
                  (radioElement) => (
                    isDisabled ? (
                      React.cloneElement(radioElement, {
                        groupName, defaultCheckedValue, isDisabled, register, size,
                      })
                    ) : (
                      React.cloneElement(radioElement, { groupName, defaultCheckedValue, register, size })
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
