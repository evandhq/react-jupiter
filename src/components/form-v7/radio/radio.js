import React from 'react';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import ErrorMsg from '../errorMsg';
import { Fieldset, RadioWrapper } from './index.style';

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
};

const Radio = (props: Props) => {
  const {
    children, groupName, label, handleChange, defaultCheckedValue, isDisabled,
    type, errorMessage, register,
  } = props;
  const radioElements = React.Children.toArray(children);

  return (
    <Fieldset onChange={handleChange}>
      <GlobalStyle />
      {label && (
        <legend>
          <Text size={14}>
            {label}
          </Text>
        </legend>
      )}
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
};
export default Radio;
