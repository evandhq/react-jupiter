"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithError = exports.NoResize = exports.Minimal = exports.HorizontalResize = exports.FullOptions = exports.Disabled = void 0;var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Form/Textarea',
  component: _index.default,

  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'توضیجات'
    },
    htmlElementName: {
      control: 'text',
      defaultValue: 'html-element-name'
    },
    defaultValue: {
      control: 'text',
      defaultValue: 'توضیحات قبلی'
    },
    placeholder: {
      control: 'text',
      defaultValue: 'این پلیس هولدر است'
    },
    minHeight: {
      control: 'text',
      defaultValue: '120'
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal'],
      defaultValue: 'vertical'
    },
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا'
    },
    handleChange: {
      action: 'handleChange'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {};

const FullOptions = exports.FullOptions = Template.bind({});
FullOptions.args = {
  label: 'توضیجات',
  htmlElementName: 'html-element-name',
  defaultValue: 'توضیحات قبلی',
  placeholder: 'این پلیس هولدر است',
  minHeight: '120',
  isDisabled: false,
  resize: 'vertical',
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
  errorMessage: 'ارور زیبا'
};

const Disabled = exports.Disabled = Template.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true
};

const NoResize = exports.NoResize = Template.bind({});
NoResize.args = {
  ...FullOptions.args,
  resize: 'none'
};

const HorizontalResize = exports.HorizontalResize = Template.bind({});
HorizontalResize.args = {
  ...FullOptions.args,
  resize: 'horizontal'
};

const WithError = exports.WithError = Template.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا توضیحات را وارد کنید'
};