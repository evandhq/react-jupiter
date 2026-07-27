import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import ErrorMsg from '../errorMsg';
import Label from '../label';
import Icon from '../../icon';
import { Text } from '../../typography';
import { fixNumbers } from '../../utils/numbers';
import { DEFAULT_SIZE } from '../sizes';
import {
  Input,
  DescriptionContainer,
  PasswordIcon,
} from './index.style';

class TextInput extends Component {
  constructor(props) {
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
      className = '',
      size = DEFAULT_SIZE,
    } = this.props;

    const { showPassword } = this.state;

    return (
      <>
        <fieldset className="w-full">
          <Label
            htmlFor={id || `${type}-${htmlElementName.split(' ').join('')}`}
            label={label}
            number={number}
            required={required}
          />
          {description && (
            <Text 
              size={10} 
              color="gray" 
              data-test="text-input-description"
              className="block mb-1"
            >
              {description}
            </Text>
          )}
          <Controller
            name={htmlElementName}
            control={control}
            rules={{ required: required ? 'این فیلد اجباری است' : false }}
            render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
              <div className="flex flex-col gap-1.5">
                <div className="relative">
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
                  <input
                    id={id || `${type}-${htmlElementName.split(' ').join('')}`}
                    name={htmlElementName}
                    className={twMerge(`
                      w-full !box-border font-normal font-['IranSharp']
                      border border-gray-300 rounded-md
                      ${rtl ? 'text-right' : 'text-left'}
                      ${disabled ? 'bg-gray-100 text-gray-500 border-transparent cursor-not-allowed' : 'bg-white text-gray-900 hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}
                      focus:outline-none transition-colors duration-200
                      ${type === 'password' ? 'pr-3 pl-10' : 'px-3'}
                      ${size === 'xs' ? 'text-xs py-1 px-2' : ''}
                      ${size === 'sm' ? 'text-sm py-1.5 px-3' : ''}
                      ${size === 'md' ? 'text-base py-2 px-3' : ''}
                      ${size === 'lg' ? 'text-lg py-3 px-4' : ''}
                    `, className)}
                    type={showPassword ? 'text' : type}
                    placeholder={placeholder}
                    defaultValue={value}
                    disabled={disabled}
                    dir={rtl ? 'rtl' : 'ltr'}
                    {...register(htmlElementName, {
                      onFocus: this.handleFocus,
                      disabled,
                      onChange: (e) => fixNumbers(e),
                    })}
                    onChange={(e) => {
                      fixNumbers(e)
                      onChange(e)
                    }}
                    onFocus={this.handleFocus}
                    readOnly={readOnly}
                  />
                </div>
                <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
              </div>
            )}
          />
        </fieldset>
      </>
    );
  }
}

export default TextInput;
