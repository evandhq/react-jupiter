import React from 'react';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import ErrorMsg from '../errorMsg';
import { Fieldset, CheckboxWrapper } from './index.style';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';
import { toPersianNumber } from '../../utils/numbers';
import Label from '../label';

type Props = {
  children: * => Node,
  groupName?: string,
  handleChange?: () => void,
  isDisabled?: boolean,
  type?: 'horizontal' | 'vertical',
  errorMessage?: string,
  required?: boolean,
  register: any,
};

const Checkbox = (props: Props) => {
  const {
    children, groupName, label, handleChange, isDisabled, type, errorMessage, required, register, number,
  } = props;
  const radioElements = React.Children.toArray(children);

  return (
    <ThemeProvider theme={theme}>
      <Fieldset onChange={handleChange}>
        <GlobalStyle />
        <Label label={label} number={number} required={required} />
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
  required: false,
  number: null,
};
export default Checkbox;
