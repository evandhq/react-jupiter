import React from 'react';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import ErrorMsg from '../errorMsg';
import { Fieldset, CheckboxWrapper } from './index.style';

const Checkbox = (props) => {
  const {
    groupName = 'radio-element',
    label = '',
    handleChange = () => { },
    isDisabled = false,
    type = 'horizontal',
    errorMessage = '',
    children,
  } = props;
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
      <CheckboxWrapper type={type}>
        {radioElements.map(
          (radioElement) => (
            isDisabled ? (
              React.cloneElement(radioElement, { groupName, isDisabled })
            ) : (
              React.cloneElement(radioElement, { groupName })
            )
          ),
        )}
      </CheckboxWrapper>
      <ErrorMsg errorMessage={errorMessage} />
    </Fieldset>
  );
};
export default Checkbox;
