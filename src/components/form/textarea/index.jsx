import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import StyledTextarea from './index.style';

const Textarea = ({
  htmlElementName = 'textarea-element',
  label = '',
  isDisabled = false,
  defaultValue = '',
  placeholder = '',
  resize = 'none',
  minHeight = 120,
  handleChange = () => { },
  errorMessage = '',
  inputRef = null,
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {label && (
    <label htmlFor={htmlElementName}>
      <Text bold size={14}>
        {label}
      </Text>
    </label>
    )}

    <StyledTextarea
      name={htmlElementName}
      disabled={isDisabled}
      placeholder={placeholder}
      resize={resize}
      minHeight={minHeight}
      onChange={handleChange}
      ref={inputRef}
    >
      {defaultValue}
    </StyledTextarea>
    <ErrorMsg errorMessage={errorMessage} />
  </ThemeProvider>
);

export default Textarea;
