import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Text } from '../../typography';
import ErrorMsg from '../errorMsg';
import { StyledSelect, SelectButton, Label } from './index.style';

type Props = {
  htmlElementName?: string,
  defaultValue?: string,
  label?: string,
  handleChange?: () => void,
  placeholder?: string,
  isDisabled?: boolean,
  children: * => Node,
  errorMessage?: string,
  register?: any,
  required?: Boolean,
}
const Select = (props: Props) => {
  const {
    htmlElementName, defaultValue, handleChange, placeholder, isDisabled,
    children, label, register, errorMessage, required,
  } = props;

  function onChangeHandler(e) {
    handleChange(e.target.value);
  }

  const renderSelect = () => (
    <ThemeProvider theme={theme}>
      <SelectButton disabled={isDisabled}>
        <StyledSelect
          name={htmlElementName}
          defaultValue={placeholder ? '' : defaultValue}
          data-test="select"
          {...register(htmlElementName, {
            onChange: onChangeHandler,
            disabled: isDisabled,
          })}
        >
          {placeholder && (
            <option value="" disabled>{placeholder}</option>
          )}
          {children}
        </StyledSelect>
      </SelectButton>
      <ErrorMsg errorMessage={errorMessage} />
    </ThemeProvider>
  );

  if (label) {
    return (
      <ThemeProvider theme={theme}>
        <Label htmlFor={htmlElementName}>
          <Text size={14} isDisplayBlock>
            {label}
            {!!required && <span className="required">*</span>}
          </Text>
          {renderSelect()}
        </Label>
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
  handleChange: () => { },
  errorMessage: '',
  register: null,
  required: false
};

export default Select;
