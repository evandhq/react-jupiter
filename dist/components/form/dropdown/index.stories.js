"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithPlaceholderAndOptions = exports.WithPlaceholder = exports.WithError = exports.Minimal = exports.FullOptions = exports.DisabledOption = exports.Disabled = exports.CustomOption = void 0;var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _select = _interopRequireDefault(require("./select"));
var _option = _interopRequireDefault(require("./option"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Form/Dropdown',
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
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا'
    },
    handleChange: {
      action: 'handleChange'
    }
  }
};

const Template = (args) => /*#__PURE__*/
_react.default.createElement(_select.default, args, /*#__PURE__*/
_react.default.createElement(_option.default, { value: "first", label: "First Value" }), /*#__PURE__*/
_react.default.createElement(_option.default, { value: "sec", label: "2nd Value" })
);


const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {};

const WithPlaceholder = exports.WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  htmlElementName: 'استان',
  placeholder: '__استان مورد نظر خود را انتخاب کنید__',
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function')
};

const WithOptionsTemplate = (args) => /*#__PURE__*/
_react.default.createElement(_select.default, args, /*#__PURE__*/
_react.default.createElement(_option.default, { value: "20", label: "\u06A9\u0631\u062C" }), /*#__PURE__*/
_react.default.createElement(_option.default, { value: "30", label: "\u062A\u0647\u0631\u0627\u0646" }), /*#__PURE__*/
_react.default.createElement(_option.default, { value: "40", label: "\u0641\u0645", isDisabled: true })
);


const FullOptions = exports.FullOptions = WithOptionsTemplate.bind({});
FullOptions.args = {
  htmlElementName: 'استان',
  defaultValue: '30',
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
  isDisabled: false,
  label: 'محل برگزاری رویداد',
  errorMessage: 'ارور زیبا'
};

const WithPlaceholderAndOptions = exports.WithPlaceholderAndOptions = WithOptionsTemplate.bind({});
WithPlaceholderAndOptions.args = {
  ...FullOptions.args,
  placeholder: '__استان مورد نظر خود را انتخاب کنید__'
};

const Disabled = exports.Disabled = WithOptionsTemplate.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true
};

const WithError = exports.WithError = WithOptionsTemplate.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا یک گزینه را انتخاب کنید'
};

const SelectOptionTemplate = (args) => /*#__PURE__*/
_react.default.createElement(_select.default, {
  htmlElementName: "\u0627\u0633\u062A\u0627\u0646",
  defaultValue: "30",
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
  isDisabled: false }, /*#__PURE__*/

_react.default.createElement(_option.default, args), /*#__PURE__*/
_react.default.createElement(_option.default, { value: "30", label: "\u062A\u0647\u0631\u0627\u0646" }), /*#__PURE__*/
_react.default.createElement(_option.default, { value: "40", label: "\u0641\u0645" })
);


const CustomOption = exports.CustomOption = SelectOptionTemplate.bind({});
CustomOption.args = {
  value: '20',
  label: 'کرج',
  isDisabled: false
};

const DisabledOption = exports.DisabledOption = SelectOptionTemplate.bind({});
DisabledOption.args = {
  ...CustomOption.args,
  isDisabled: true
};