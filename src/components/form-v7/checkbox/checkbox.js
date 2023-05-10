import React from 'react';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import ErrorMsg from '../errorMsg';
import { Fieldset, CheckboxWrapper } from './index.style';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: * => Node,
  groupName?: string,
  label?: string,
  handleChange?: () => void,
  isDisabled?: boolean,
  type?: 'horizontal' | 'vertical',
  errorMessage?: string,
  required?: boolean,
  register: any,
};

const Checkbox = (props: Props) => {
  const {
    children, groupName, label, handleChange, isDisabled, type, errorMessage, required, register
  } = props;
  const radioElements = React.Children.toArray(children);

  return (
    <ThemeProvider theme={theme}>
      <Fieldset onChange={handleChange}>
        <GlobalStyle />
        {label && (
          <legend>
            <Text size={14}>
              {label}
              {!!required && <span className="required">*</span>}
            </Text>
          </legend>
        )}
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
        <ErrorMsg errorMessage={errorMessage} />
      </Fieldset>
    </ThemeProvider>
  );
};

Checkbox.defaultProps = {
  groupName: 'radio-element',
  label: '',
  handleChange: () => { },
  isDisabled: false,
  type: 'horizontal',
  errorMessage: '',
  required: false
};
export default Checkbox;
