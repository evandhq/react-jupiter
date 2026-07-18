import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import GlobalStyle from '../../globalStyle';
import ErrorMsg from '../errorMsg';
import { CheckboxWrapper } from './index.style';
import { Fieldset } from '../index.style';
import theme from '../theme';
import Label from '../label';
import { Text } from '../../typography';

const Checkbox = ({
  groupName = 'radio-element',
  label = '',
  handleChange = () => { },
  isDisabled = false,
  type = 'horizontal',
  required = false,
  register,
  number,
  control,
  children,
  className = '',
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
              <CheckboxWrapper type={type}>
                {radioElements.map(
                  (radioElement) => (
                    isDisabled ? (
                      React.cloneElement(radioElement, { groupName, isDisabled, register })
                    ) : (
                      React.cloneElement(radioElement, { groupName, register })
                    )
                  ),
                )}
              </CheckboxWrapper>
              <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
            </>
          )}
        />
      </Fieldset>
    </ThemeProvider>
  );
};

export default Checkbox;
