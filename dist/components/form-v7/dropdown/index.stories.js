"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithPlaceholderAndOptions = exports.WithPlaceholder = exports.WithError = exports.Minimal = exports.FullOptions = exports.Disabled = exports.CustomOption = void 0;var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");

var _addonActions = require("@storybook/addon-actions");
var _select = _interopRequireDefault(require("./select"));
var _option = _interopRequireDefault(require("./option"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}var _default = exports.default =

{
  title: 'Form-v7/Dropdown',
  component: _select.default,

  argTypes: {
    htmlElementName: {
      control: 'text',
      defaultValue: 'استان'
    },
    placeholder: {
      control: 'text',
      defaultValue: '__استان مورد نظر خود را انتخاب کنید__'
    },
    defaultValue: {
      control: 'text',
      defaultValue: '30'
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false
    },
    label: {
      control: 'text',
      defaultValue: 'محل برگزاری رویداد'
    },
    number: {
      control: 'number',
      defaultValue: 3
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
  return (/*#__PURE__*/
    _react.default.createElement(_select.default, _extends({}, args, { register: register, control: control }), /*#__PURE__*/
    _react.default.createElement(_option.default, { value: "20", label: "\u06A9\u0631\u062C" }), /*#__PURE__*/
    _react.default.createElement(_option.default, { value: "30", label: "\u062A\u0647\u0631\u0627\u0646" }), /*#__PURE__*/
    _react.default.createElement(_option.default, { value: "40", label: "\u0641\u0645" })
    ));

};

const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {
  htmlElementName: 'select',
  placeholder: 'یک گزینه را انتخاب کنید',
  defaultValue: 'question 2',
  label: 'select box',
  number: 1,
  required: false
};

const WithPlaceholder = exports.WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  htmlElementName: 'استان',
  placeholder: '__استان مورد نظر خود را انتخاب کنید__',
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function')
};

const FullOptions = exports.FullOptions = Template.bind({});
FullOptions.args = {
  htmlElementName: 'استان',
  defaultValue: '30',
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
  isDisabled: false,
  label: 'محل برگزاری رویداد',
  number: 3,
  errorMessage: 'ارور زیبا',
  required: true
};

const WithPlaceholderAndOptions = exports.WithPlaceholderAndOptions = Template.bind({});
WithPlaceholderAndOptions.args = {
  ...FullOptions.args,
  placeholder: '__استان مورد نظر خود را انتخاب کنید__'
};

const Disabled = exports.Disabled = Template.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true
};

const WithError = exports.WithError = Template.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا یک گزینه را انتخاب کنید'
};

const SelectOptionTemplate = (args) => {
  const { register, control } = (0, _reactHookForm.useForm)();
  return (/*#__PURE__*/
    _react.default.createElement(_select.default, {
      htmlElementName: "\u0627\u0633\u062A\u0627\u0646",
      defaultValue: "30",
      handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
      isDisabled: false,
      register: register,
      required: true,
      control: control }, /*#__PURE__*/

    _react.default.createElement(_option.default, args), /*#__PURE__*/
    _react.default.createElement(_option.default, { value: "30", label: "\u062A\u0647\u0631\u0627\u0646" }), /*#__PURE__*/
    _react.default.createElement(_option.default, { value: "40", label: "\u0641\u0645" })
    ));

};

const CustomOption = exports.CustomOption = SelectOptionTemplate.bind({});
CustomOption.args = {
  value: '20',
  label: 'کرج',
  isDisabled: false
};