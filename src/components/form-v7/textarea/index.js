import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import StyledTextarea from './index.style';

type Props = {
  htmlElementName?: string,
  label?: string,
  isDisabled?: Boolean,
  defaultValue?: string,
  placeholder?: string,
  resize?: 'horizontal' | 'vertical' | 'none',
  minHeight?: number,
  handleChange?: () => void,
  errorMessage?: string,
  register?: any,
};

const Textarea = (props: Props) => {
  const {
    htmlElementName, label, isDisabled, defaultValue, placeholder,
    resize, minHeight, handleChange, errorMessage, register,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {label && (
        <label htmlFor={htmlElementName}>
          <Text size={14}>
            {label}
          </Text>
        </label>
      )}

      <StyledTextarea
        name={htmlElementName}
        placeholder={placeholder}
        resize={resize}
        minHeight={minHeight}
        {...register(htmlElementName, {
          onChange: handleChange,
          disabled: isDisabled,
        })}
      >
        {defaultValue}
      </StyledTextarea>
      <ErrorMsg errorMessage={errorMessage} />
    </ThemeProvider>
  );
};

Textarea.defaultProps = {
  htmlElementName: 'textarea-element',
  label: '',
  isDisabled: false,
  defaultValue: '',
  placeholder: '',
  resize: 'none',
  minHeight: 120,
  handleChange: () => { },
  errorMessage: '',
  register: null,
};

export default Textarea;
