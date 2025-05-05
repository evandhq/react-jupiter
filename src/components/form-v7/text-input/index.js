// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Controller, UseFormRegister, FieldValues } from 'react-hook-form';
import GlobalStyle from '../../globalStyle';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import Label from '../label';
import {
  Input,
  DescriptionContainer,
  PasswordIcon,
} from './index.style';
import { Fieldset } from '../index.style';
import { fixNumbers } from '../../utils/numbers';

type Props = {
  type?: 'text' | 'password',
  label?: string,
  htmlElementName: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  description?: string,
  register: UseFormRegister<FieldValues>;
  control: FormData;
  required?: boolean | String,
  number?: number,
  rtl?: boolean,
  onFocus?: (e: FocusEvent) => void,
  readOnly?: boolean,
};

type State = {
  showPassword: boolean,
};

class TextInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  handleFocus = (e) => {
    e.target.setSelectionRange(0, 0);
  };

  render() {
    const {
      type = 'text',
      label = null,
      htmlElementName,
      id = null,
      placeholder = null,
      disabled = false,
      description = null,
      required = false,
      number = null,
      rtl = true,
      onFocus = () => {},
      readOnly = false,
      register,
      control,
    } = this.props;

    const { showPassword } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fieldset>
          <GlobalStyle />
          <Label
            htmlFor={id || `${type}-${htmlElementName.split(' ').join('')}`}
            label={label}
            number={number}
            required={required}
          />
          {description && (
            <DescriptionContainer size={10} color="gray" data-test="text-input-description">
              {description}
            </DescriptionContainer>
          )}
          <Controller
            name={htmlElementName}
            control={control}
            rules={{ required: required ? 'این فیلد اجباری است' : false }}
            render={({ field: { value }, fieldState }) => (
              <div style={{ position: 'relative' }}>
                {type === 'password' && (
                  <PasswordIcon
                    name={showPassword ? 'visibility-off' : 'visibility'}
                    color="gray"
                    onClick={this.togglePasswordVisibility}
                    style={{
                      cursor: 'pointer', position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)',
                    }}
                  />
                )}
                <Input
                  id={id || `${type}-${htmlElementName.split(' ').join('')}`}
                  name={htmlElementName}
                  type={showPassword ? 'text' : type}
                  placeholder={placeholder}
                  defaultValue={value}
                  rtl={rtl}
                  {...register(htmlElementName, {
                    onFocus: this.handleFocus,
                    disabled,
                    onChange: (e) => fixNumbers(e),
                  })}
                  onFocus={onFocus}
                  readOnly={readOnly}
                />
                <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
              </div>
            )}
          />
        </Fieldset>
      </ThemeProvider>
    );
  }
}

export default TextInput;
