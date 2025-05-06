"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithError = exports.Password = exports.Minimal = exports.FullOptions = exports.Disabled = void 0;var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Form/Inputs',
  component: _index.default,

  argTypes: {
    htmlElementName: {
      control: 'text',
      defaultValue: 'text-name-01'
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
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {
  htmlElementName: 'text-name-01',
  label: 'این لیبل است'
};

const FullOptions = exports.FullOptions = Template.bind({});
FullOptions.args = {
  htmlElementName: 'text-name-02',
  label: 'این لیبل است',
  placeholder: 'متن پیشفرض',
  disabled: false,
  description: 'توضیحات اضافه',
  errorMessage: 'ارور زیبا',
  type: 'text'
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
  errorMessage: 'این فیلد الزامی است'
};