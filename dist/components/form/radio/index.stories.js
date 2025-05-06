"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithError = exports.WithDefaultValue = exports.VerticalLayout = exports.Minimal = exports.FullOptions = exports.DisabledOption = exports.Disabled = exports.CustomOption = void 0;var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _radio = _interopRequireDefault(require("./radio"));
var _radioOption = _interopRequireDefault(require("./radio-option"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Form/Radio',
  component: _radio.default,

  argTypes: {
    groupName: {
      control: 'text',
      defaultValue: 'degree'
    },
    label: {
      control: 'text',
      defaultValue: 'آخرین مدرک تحصیلی خود را انتخاب کنید'
    },
    defaultCheckedValue: {
      control: 'text',
      defaultValue: '300'
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
_react.default.createElement(_radio.default, args, /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "first", label: "First Value" }), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "sec", label: "Sec Value" }), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "third", label: "Third Value" })
);


const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {};

const FullOptions = exports.FullOptions = Template.bind({});
FullOptions.args = {
  groupName: 'degree',
  label: 'آخرین مدرک تحصیلی خود را انتخاب کنید',
  defaultCheckedValue: '300',
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
  isDisabled: false,
  type: 'horizontal',
  errorMessage: 'ارور زیبا'
};

const FullOptionsTemplate = (args) => /*#__PURE__*/
_react.default.createElement(_radio.default, args, /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "100", label: "\u0632\u06CC\u0631 \u062F\u06CC\u067E\u0644\u0645" }), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "234", label: "\u062F\u06CC\u067E\u0644\u0645" }), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "300", label: "\u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u06CC" }), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "400", label: "\u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u06CC \u0627\u0631\u0634\u062F" }), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "500", label: "\u062F\u06A9\u062A\u0631\u0627" })
);


const WithDefaultValue = exports.WithDefaultValue = FullOptionsTemplate.bind({});
WithDefaultValue.args = {
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
  errorMessage: 'لطفا یک گزینه را انتخاب کنید'
};

const RadioOptionTemplate = (args) => /*#__PURE__*/
_react.default.createElement(_radio.default, { groupName: "degree", label: "\u0622\u062E\u0631\u06CC\u0646 \u0645\u062F\u0631\u06A9 \u062A\u062D\u0635\u06CC\u0644\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F" }, /*#__PURE__*/
_react.default.createElement(_radioOption.default, args), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "200", label: "\u062F\u06CC\u067E\u0644\u0645" }), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "300", label: "\u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u06CC" }), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "400", label: "\u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u06CC \u0627\u0631\u0634\u062F" }), /*#__PURE__*/
_react.default.createElement(_radioOption.default, { value: "500", label: "\u062F\u06A9\u062A\u0631\u0627" })
);


const CustomOption = exports.CustomOption = RadioOptionTemplate.bind({});
CustomOption.args = {
  label: 'زیر دیپلم',
  value: '100',
  isDisabled: false
};

const DisabledOption = exports.DisabledOption = RadioOptionTemplate.bind({});
DisabledOption.args = {
  ...CustomOption.args,
  isDisabled: true
};