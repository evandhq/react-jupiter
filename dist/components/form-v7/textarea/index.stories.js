"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithError = exports.NoResize = exports.Minimal = exports.HorizontalResize = exports.FullOptions = exports.Disabled = void 0;var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _reactHookForm = require("react-hook-form");
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}var _default = exports.default =

{
  title: 'Form-V7/Textarea',
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
    required: {
      control: 'boolean',
      defaultValue: true
    },
    resize: {
      control: 'select',
      options: ['both', 'horizontal', 'vertical', 'none'],
      defaultValue: 'both'
    },
    defaultValue: {
      control: 'text',
      defaultValue: 'این یک باکس متنی می‌باشد'
    }
  }
};

const Template = (args) => {
  const { register, control } = (0, _reactHookForm.useForm)();
  return /*#__PURE__*/_react.default.createElement(_index.default, _extends({}, args, { register: register, control: control }));
};

const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {};

const FullOptions = exports.FullOptions = Template.bind({});
FullOptions.args = {
  label: 'توضیجات',
  htmlElementName: 'html-element-name',
  placeholder: 'این پلیس هولدر است',
  minHeight: '120',
  isDisabled: false,
  required: true,
  resize: 'both',
  handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
  defaultValue: 'این یک باکس متنی می‌باشد'
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
  errorMessage: 'لطفا متن را وارد کنید'
};