"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithError = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _reactHookForm = require("react-hook-form");
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}var _default = exports.default =

{
  title: 'Form-v7/Captcha',
  component: _index.default,

  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'کد تصویری'
    },
    htmlElementName: {
      control: 'text',
      defaultValue: 'captcha'
    },
    imageUrl: {
      control: 'text',
      defaultValue: 'https://static.evand.net/captcha/0bb5a9832be7b86a2a0a646ae2fd1649.jpg'
    },
    errorMessage: {
      control: 'text',
      defaultValue: 'لطفا کد تصویری را وارد کنید'
    },
    required: {
      control: 'boolean',
      defaultValue: true
    }
  }
};

const Template = (args) => {
  const { register, control } = (0, _reactHookForm.useForm)();
  return (/*#__PURE__*/
    _react.default.createElement(_index.default, _extends({},
    args, {
      register: register,
      control: control,
      handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
      fetchData: () => console.log('fetching') })
    ));

};

const Default = exports.Default = Template.bind({});
Default.args = {
  label: 'کد تصویری',
  htmlElementName: 'captcha',
  imageUrl: 'https://static.evand.net/captcha/0bb5a9832be7b86a2a0a646ae2fd1649.jpg',
  required: true
};

const WithError = exports.WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMessage: 'کد تصویری نامعتبر است'
};