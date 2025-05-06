"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithError = exports.Password = exports.LTR = exports.FullOptions = exports.Disabled = void 0;var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");

var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}var _default = exports.default =

{
  title: 'Form-V7/Text Input',
  component: _index.default,

  argTypes: {
    htmlElementName: {
      control: 'text',
      defaultValue: 'text-name-02'
    },
    label: {
      control: 'text',
      defaultValue: 'این لیبل است'
    },
    placeholder: {
      control: 'text',
      defaultValue: 'متن پیشفرض'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    description: {
      control: 'text',
      defaultValue: 'توضیحات اضافه'
    },
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا'
    },
    type: {
      control: 'select',
      options: ['text', 'password'],
      defaultValue: 'text'
    },
    rtl: {
      control: 'boolean',
      defaultValue: true
    },
    required: {
      control: 'boolean',
      defaultValue: true
    },
    number: {
      control: 'number',
      defaultValue: 23
    }
  }
};

const Template = (args) => {
  const { register, control } = (0, _reactHookForm.useForm)();
  return /*#__PURE__*/_react.default.createElement(_index.default, _extends({}, args, { register: register, control: control }));
};

const FullOptions = exports.FullOptions = Template.bind({});
FullOptions.args = {
  htmlElementName: 'text-name-02',
  required: true,
  label: 'این لیبل است',
  number: 23,
  placeholder: 'متن پیشفرض',
  disabled: false,
  description: 'توضیحات اضافه',
  errorMessage: 'ارور زیبا',
  type: 'text',
  rtl: true
};

const LTR = exports.LTR = Template.bind({});
LTR.args = {
  ...FullOptions.args,
  rtl: false
};

const Password = exports.Password = Template.bind({});
Password.args = {
  ...FullOptions.args,
  type: 'password'
};

const Disabled = exports.Disabled = Template.bind({});
Disabled.args = {
  ...FullOptions.args,
  disabled: true
};

const WithError = exports.WithError = Template.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا این فیلد را پر کنید'
};