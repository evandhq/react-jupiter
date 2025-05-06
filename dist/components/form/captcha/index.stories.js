"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithError = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Form/Captcha',
  component: _index.default,

  argTypes: {
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا'
    },
    src: {
      control: 'text',
      defaultValue: 'https://static.evand.net/captcha/12c178c8006cb0cea5253a83db6a96db.jpg'
    },
    handleCaptchaError: {
      action: 'handleCaptchaError'
    },
    handleRetryCaptcha: {
      action: 'handleRetryCaptcha'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  errorMessage: 'ارور زیبا',
  src: 'https://static.evand.net/captcha/12c178c8006cb0cea5253a83db6a96db.jpg',
  handleCaptchaError: (0, _addonActions.action)('trigger what you want to do when captcha src has an err'),
  handleRetryCaptcha: (0, _addonActions.action)('trigger what you want to do when click on retry button')
};

const WithError = exports.WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMessage: 'لطفا کد امنیتی را وارد کنید'
};