import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import GlobalStyle from '../../globalStyle';
import ErrorMsg from '../errorMsg';
import { CheckboxWrapper } from './index.style';
import { Fieldset } from '../index.style';
import theme from '../theme';
import Label from '../label';

type Props = {
  children: * => Node,
  groupName?: string,
  handleChange?: () => void,
  isDisabled?: boolean,
  label?: string,
  type?: 'horizontal' | 'vertical',
  required?: boolean,
  register: UseFormRegister<FieldValues>;
  control: FormData;
};

const Checkbox = ({
  groupName = 'radio-element',
  label = '',
  handleChange = () => { },
  isDisabled = false,
  type = 'horizontal',
  required = false,
  register,
  number,
  control,
  children,
}: Props) => {
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
              <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
            </>
          )}
        />
      </Fieldset>
    </ThemeProvider>
  );
};

export default Checkbox;
