import React from 'react';
import GlobalStyle from '../../globalStyle';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../typography';
import ErrorMsg from '../errorMsg';
import { Fieldset, RadioWrapper } from './index.style';
import Label from '../label';
import theme from '../theme';

type Props = {
  children: * => Node,
  groupName?: string,
  label?: string,
  handleChange?: () => void,
  defaultCheckedValue?: string,
  isDisabled?: boolean,
  type?: 'horizontal' | 'vertical',
  errorMessage?: string,
  required?: boolean,
  register: any,
  number?: number,
};

const Radio = (props: Props) => {
  const {
    children, groupName, label, handleChange, defaultCheckedValue, isDisabled,
    type, errorMessage, register, number, required,
  } = props;
  const radioElements = React.Children.toArray(children);

  return (
    <ThemeProvider theme={theme}>
      <Fieldset onChange={handleChange}>
        <GlobalStyle />
        <Label label={label} number={number} required={required} />
        <RadioWrapper type={type}>
          {radioElements.map(
            (radioElement) => (
              isDisabled ? (
                React.cloneElement(radioElement, { groupName, defaultCheckedValue, isDisabled, register })
              ) : (
                React.cloneElement(radioElement, { groupName, defaultCheckedValue, register })
              )
            ),
          )}
        </RadioWrapper>
        <ErrorMsg errorMessage={errorMessage} />
      </Fieldset>
    </ThemeProvider>
  );
};

Radio.defaultProps = {
  groupName: 'radio-element',
  label: '',
  handleChange: () => { },
  defaultCheckedValue: '',
  isDisabled: false,
  type: 'horizontal',
  errorMessage: '',
  required: false,
  number: null,
};
export default Radio;
