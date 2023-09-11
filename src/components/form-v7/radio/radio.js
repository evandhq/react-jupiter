import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import GlobalStyle from '../../globalStyle';
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
  required?: boolean,
  register: UseFormRegister<FieldValues>;
  number?: number,
  control: FormData;
};

const Radio = (props: Props) => {
  const {
    children, groupName, label, handleChange, defaultCheckedValue, isDisabled,
    type, register, number, required, control,
  } = props;
  const radioElements = React.Children.toArray(children);

  return (
    <ThemeProvider theme={theme}>
      <Fieldset onChange={handleChange}>
        <GlobalStyle />
        <Label label={label} number={number} required={required} />
        <Controller
          name={groupName}
          control={control}
          rules={{ required: required ? 'این فیلد اجباری است' : false }}
          render={({ fieldState }) => (
            <>
              <RadioWrapper type={type}>
                {radioElements.map(
                  (radioElement) => (
                    isDisabled ? (
                      React.cloneElement(radioElement, {
                        groupName, defaultCheckedValue, isDisabled, register,
                      })
                    ) : (
                      React.cloneElement(radioElement, { groupName, defaultCheckedValue, register })
                    )
                  ),
                )}
              </RadioWrapper>
              <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
            </>
          )}
        />
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
  required: false,
  number: null,
};
export default Radio;
