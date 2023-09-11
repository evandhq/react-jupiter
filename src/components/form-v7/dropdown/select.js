import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import { StyledSelect, SelectButton } from './index.style';
import Label from '../label';

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
}
const Select = (props: Props) => {
  const {
    htmlElementName, placeholder, isDisabled,
    children, label, required, number, control,
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
        <Label htmlFor={htmlElementName} label={label} number={number} required={required} />
        {renderSelect()}
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
  isDisabled: false,
  errorMessage: '',
  required: false,
  number: null,
};

export default Select;
