"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithError = exports.VerticalLayout = exports.Minimal = exports.FullOptions = exports.Disabled = exports.CustomOption = void 0;var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");

var _addonActions = require("@storybook/addon-actions");
var _checkbox = _interopRequireDefault(require("./checkbox"));
var _checkboxOption = _interopRequireDefault(require("./checkbox-option"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}var _default = exports.default =

{
  title: 'Form-V7/Checkbox',
  component: _checkbox.default,

  argTypes: {
    groupName: {
      control: 'text',
      defaultValue: 'degree'
    },
    label: {
      control: 'text',
      defaultValue: 'در کدام موضوع ها توانایی دارید'
    },
    number: {
      control: 'number',
      defaultValue: 4
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false
    },
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
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
    _react.default.createElement(_checkbox.default, _extends({}, args, { register: register, control: control }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "100", label: "\u0648\u0631\u0632\u0634\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "234", label: "\u0639\u0644\u0645\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "300", label: "\u0645\u0630\u0647\u0628\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "400", label: "\u0641\u0631\u0647\u0646\u06AF\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "500", label: "\u0647\u0646\u0631\u06CC" })
    ));

};

const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {
  groupName: 'degree',
  required: true
};

const FullOptions = exports.FullOptions = Template.bind({});
FullOptions.args = {
  groupName: 'degree',
  label: 'در کدام موضوع ها توانایی دارید',
  number: 4,
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
  isDisabled: false,
  type: 'horizontal',
  errorMessage: 'ارور زیبا',
  required: true
};

const VerticalLayout = exports.VerticalLayout = Template.bind({});
VerticalLayout.args = {
  ...FullOptions.args,
  type: 'vertical'
};

const Disabled = exports.Disabled = Template.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true
};

const WithError = exports.WithError = Template.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا حداقل یک گزینه را انتخاب کنید'
};

const CheckboxOptionTemplate = (args) => {
  const { register } = (0, _reactHookForm.useForm)();
  return (/*#__PURE__*/
    _react.default.createElement(_checkbox.default, { groupName: "degree", required: true, label: "\u062F\u0631 \u06A9\u062F\u0627\u0645 \u0645\u0648\u0636\u0648\u0639 \u0647\u0627 \u062A\u0648\u0627\u0646\u0627\u06CC\u06CC \u062F\u0627\u0631\u06CC\u062F", register: register }, /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, _extends({}, args, { register: register })), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "200", label: "\u0639\u0644\u0645\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "300", label: "\u0645\u0630\u0647\u0628\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "400", label: "\u0641\u0631\u0647\u0646\u06AF\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "500", label: "\u0647\u0646\u0631\u06CC" })
    ));

};

const CustomOption = exports.CustomOption = CheckboxOptionTemplate.bind({});
CustomOption.args = {
  label: 'ورزشی',
  value: '100',
  isDisabled: false,
  isChecked: false
};