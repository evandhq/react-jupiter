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
};

const Radio = ({
  groupName = 'radio-element',
  label = '',
  handleChange = () => { },
  defaultCheckedValue = '',
  isDisabled = false,
  type = 'horizontal',
  errorMessage = '',
  children,
}: Props) => {
  const radioElements = React.Children.toArray(children);

  return (
    <Fieldset onChange={handleChange}>
      <GlobalStyle />
      {label && (
        <legend>
          <Text bold size={14}>
            {label}
          </Text>
        </legend>
      )}
      <RadioWrapper type={type}>
        {radioElements.map(
          (radioElement) => (
            isDisabled ? (
              React.cloneElement(radioElement, { groupName, defaultCheckedValue, isDisabled })
            ) : (
              React.cloneElement(radioElement, { groupName, defaultCheckedValue })
            )
          ),
        )}
      </RadioWrapper>
      <ErrorMsg errorMessage={errorMessage} />
    </Fieldset>
  );
};

export default Radio;
