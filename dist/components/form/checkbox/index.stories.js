"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithPreSelectedOptions = exports.WithError = exports.VerticalLayout = exports.Minimal = exports.FullOptions = exports.DisabledOption = exports.Disabled = exports.CustomOption = exports.CheckedOption = void 0;var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _checkbox = _interopRequireDefault(require("./checkbox"));
var _checkboxOption = _interopRequireDefault(require("./checkbox-option"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Form/Checkbox',
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
    handleChange: {
      action: 'handleChange'
    }
  }
};

const Template = (args) => /*#__PURE__*/
_react.default.createElement(_checkbox.default, args, /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "first", label: "First Value" }), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "sec", label: "Sec Value" }), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "third", label: "Third Value" })
);


const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {};

const FullOptions = exports.FullOptions = Template.bind({});
FullOptions.args = {
  groupName: 'degree',
  label: 'در کدام موضوع ها توانایی دارید',
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
  isDisabled: false,
  type: 'horizontal',
  errorMessage: 'ارور زیبا'
};

const FullOptionsTemplate = (args) => /*#__PURE__*/
_react.default.createElement(_checkbox.default, args, /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "100", label: "\u0648\u0631\u0632\u0634\u06CC" }), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "234", label: "\u0639\u0644\u0645\u06CC" }), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "300", label: "\u0645\u0630\u0647\u0628\u06CC" }), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "400", label: "\u0641\u0631\u0647\u0646\u06AF\u06CC", isChecked: true }), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "500", label: "\u0647\u0646\u0631\u06CC", isChecked: true })
);


const WithPreSelectedOptions = exports.WithPreSelectedOptions = FullOptionsTemplate.bind({});
WithPreSelectedOptions.args = {
  ...FullOptions.args
};

const VerticalLayout = exports.VerticalLayout = FullOptionsTemplate.bind({});
VerticalLayout.args = {
  ...FullOptions.args,
  type: 'vertical'
};

const Disabled = exports.Disabled = FullOptionsTemplate.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true
};

const WithError = exports.WithError = FullOptionsTemplate.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا حداقل یک گزینه را انتخاب کنید'
};

const CheckboxOptionTemplate = (args) => /*#__PURE__*/
_react.default.createElement(_checkbox.default, { groupName: "degree", label: "\u062F\u0631 \u06A9\u062F\u0627\u0645 \u0645\u0648\u0636\u0648\u0639 \u0647\u0627 \u062A\u0648\u0627\u0646\u0627\u06CC\u06CC \u062F\u0627\u0631\u06CC\u062F" }, /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, args), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "200", label: "\u0639\u0644\u0645\u06CC" }), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "300", label: "\u0645\u0630\u0647\u0628\u06CC" }), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "400", label: "\u0641\u0631\u0647\u0646\u06AF\u06CC" }), /*#__PURE__*/
_react.default.createElement(_checkboxOption.default, { value: "500", label: "\u0647\u0646\u0631\u06CC" })
);


const CustomOption = exports.CustomOption = CheckboxOptionTemplate.bind({});
CustomOption.args = {
  label: 'ورزشی',
  value: '100',
  isDisabled: false,
  isChecked: false
};

const DisabledOption = exports.DisabledOption = CheckboxOptionTemplate.bind({});
DisabledOption.args = {
  ...CustomOption.args,
  isDisabled: true
};

const CheckedOption = exports.CheckedOption = CheckboxOptionTemplate.bind({});
CheckedOption.args = {
  ...CustomOption.args,
  isChecked: true
};