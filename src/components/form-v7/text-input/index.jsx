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
    const { type, priceFormat } = this.props;
    if (type !== 'number' && !priceFormat) {
      e.target.setSelectionRange(0, 0);
    }
  };

  handleKeyDown = (e) => {
    const { type, priceFormat } = this.props;
    if (type !== 'number' && !priceFormat) return;

    const allowedKeys = [
      'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Tab', 'Escape', 'Enter', 'Home', 'End',
    ];

    if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) {
      return;
    }

    if (allowedKeys.includes(e.key)) return;
    if (e.key === '.' || e.key === '-') return;

    if (!/^[0-9\u06F0-\u06F9\u0660-\u0669]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  formatPriceValue = (value) => {
    if (value === '' || value === null || value === undefined) return '';
    const num = Number(value);
    if (isNaN(num)) return '';
    return new Intl.NumberFormat('fa-IR').format(num);
  };

  unformatPriceValue = (value) => {
    if (!value && value !== 0) return '';
    return String(value).replace(/[^0-9.-]/g, '');
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
      min = undefined,
      max = undefined,
      step = undefined,
      priceFormat = false,
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
                      ${rtl && type !== 'number' && !priceFormat ? 'text-right' : 'text-left'}
                      ${disabled ? 'bg-gray-100 text-gray-500 border-transparent cursor-not-allowed' : 'bg-white text-gray-900 hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}
                      focus:outline-none transition-colors duration-200
                      ${type === 'password' ? 'pr-3 pl-10' : 'px-3'}
                      ${size === 'xs' ? 'text-xs py-1 px-2' : ''}
                      ${size === 'sm' ? 'text-sm py-1.5 px-3' : ''}
                      ${size === 'md' ? 'text-base py-2 px-3' : ''}
                      ${size === 'lg' ? 'text-lg py-3 px-4' : ''}
                    `, className)}
                    type={priceFormat ? 'text' : (showPassword ? 'text' : type)}
                    placeholder={placeholder}
                    defaultValue={priceFormat ? this.formatPriceValue(value) : value}
                    disabled={disabled}
                    dir={rtl && type !== 'number' && !priceFormat ? 'rtl' : 'ltr'}
                    inputMode={type === 'number' || priceFormat ? 'numeric' : undefined}
                    min={type === 'number' && !priceFormat ? min : undefined}
                    max={type === 'number' && !priceFormat ? max : undefined}
                    step={type === 'number' && !priceFormat ? step : undefined}
                    {...register(htmlElementName, {
                      onFocus: this.handleFocus,
                      disabled,
                      onChange: (e) => fixNumbers(e),
                    })}
                    onKeyDown={this.handleKeyDown}
                    onChange={(e) => {
                      fixNumbers(e);
                      if (priceFormat) {
                        const raw = this.unformatPriceValue(e.target.value);
                        onChange(raw);
                      } else {
                        onChange(e);
                      }
                    }}
                    onFocus={(e) => {
                      this.handleFocus(e);
                      if (priceFormat) {
                        e.target.value = value || '';
                      }
                    }}
                    {...(priceFormat ? {
                      onBlur: (e) => {
                        e.target.value = this.formatPriceValue(value);
                        onBlur(e);
                      },
                    } : {})}
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
