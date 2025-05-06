"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithError = exports.Disabled = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");

var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}var _default = exports.default =

{
  title: 'Form-V7/File Input',
  component: _index.default,

  argTypes: {
    htmlElementName: {
      control: 'text',
      defaultValue: 'file-input'
    },
    label: {
      control: 'text',
      defaultValue: 'این لیبل است'
    },
    description: {
      control: 'text',
      defaultValue: 'حجم فایل ارسالی باید کمتر از ۴ مگابایت باشد'
    },
    number: {
      control: 'number',
      defaultValue: 5
    },
    placeholder: {
      control: 'text',
      defaultValue: 'متن پیشفرض'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا'
    },
    required: {
      control: 'boolean',
      defaultValue: true
    }
  }
};

const Template = (args) => {
  const { register, control } = (0, _reactHookForm.useForm)();
  return /*#__PURE__*/_react.default.createElement(_index.default, _extends({}, args, { register: register, control: control }));
};

const Default = exports.Default = Template.bind({});
Default.args = {
  htmlElementName: 'file-input',
  label: 'این لیبل است',
  description: 'حجم فایل ارسالی باید کمتر از ۴ مگابایت باشد',
  number: 5,
  placeholder: 'متن پیشفرض',
  disabled: false,
  errorMessage: 'ارور زیبا',
  required: true
};

const Disabled = exports.Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};

const WithError = exports.WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMessage: 'لطفا یک فایل را انتخاب کنید'
};