import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import { StyledSelect, SelectButton } from './index.style';
import Label from '../label';
import { Fieldset } from '../index.style';
import { DEFAULT_SIZE } from '../sizes';

const Select = ({
  htmlElementName = 'select-element',
  defaultValue = undefined,
  placeholder = '',
  label = '',
  width = '100%',
  handleChange = undefined,
  isDisabled = false,
  required = false,
  number = null,
  control,
  children,
  className = '',
  size = DEFAULT_SIZE,
}) => {
  const renderSelect = () => (
    <ThemeProvider theme={theme}>
      <SelectButton disabled={isDisabled} size={size}>
        <Controller
          name={htmlElementName}
          control={control}
          rules={{ required: required ? 'این فیلد اجباری است' : false }}
          render={({ field, fieldState }) => (
            <>
              <StyledSelect
                {...field}
                size={size}
                className={className}
                defaultValue={defaultValue}
                disabled={isDisabled}
                onChange={(e) => {
                  if (handleChange) {
                    handleChange(e.target.value);
                  }
                  // Update RHF's state
                  field.onChange(e);
                }}
                width={width}
              >
                {placeholder && (
                <option value="">{placeholder}</option>
                )}
                {children}
              </StyledSelect>
              <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
            </>
          )}
        />
      </SelectButton>
    </ThemeProvider>
  );

  if (label) {
    return (
      <ThemeProvider theme={theme}>
        <Fieldset>
          <Label htmlFor={htmlElementName} label={label} number={number} required={required} />
          {renderSelect()}
        </Fieldset>
      </ThemeProvider>
    );
  }
  return renderSelect();
};

export default Select;
