import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import { StyledSelect, SelectButton } from './index.style';
import Label from '../label';
import { Fieldset } from '../index.style';

type Props = {
  htmlElementName?: string,
  defaultValue?: string,
  label?: string,
  placeholder?: string,
  isDisabled?: boolean,
  children: * => Node,
  errorMessage?: string,
  register: UseFormRegister<FieldValues>;
  required?: Boolean,
  number?: number;
  control: FormData;
  width?: string;
}
const Select = (props: Props) => {
  const {
    htmlElementName, placeholder, isDisabled,
    children, label, required, number, control, width,
  } = props;

  const renderSelect = () => (
    <ThemeProvider theme={theme}>
      <SelectButton disabled={isDisabled}>
        <Controller
          name={htmlElementName}
          control={control}
          rules={{ required: required ? 'این فیلد اجباری است' : false }}
          render={({ field, fieldState }) => (
            <>
              <StyledSelect
                {...field}
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

Select.defaultProps = {
  htmlElementName: 'select-element',
  defaultValue: '',
  placeholder: '',
  label: '',
  width: '100%',
  isDisabled: false,
  errorMessage: '',
  required: false,
  number: null,
};

export default Select;
