"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));

var _reactHookForm = require("react-hook-form");
var _addonActions = require("@storybook/addon-actions");
var _dropdown = require("../dropdown");
var _fileInput = _interopRequireDefault(require("../file-input"));
var _radioOption = _interopRequireDefault(require("../radio/radio-option"));
var _radio = _interopRequireDefault(require("../radio/radio"));
var _textInput = _interopRequireDefault(require("../text-input"));
var _textarea = _interopRequireDefault(require("../textarea"));
var _checkbox = _interopRequireDefault(require("../checkbox/checkbox"));
var _checkboxOption = _interopRequireDefault(require("../checkbox/checkbox-option"));
var _captcha = _interopRequireDefault(require("../captcha"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Form-V7/Sample Form',
  component: 'form',

  argTypes: {
    fileInputLabel: {
      control: 'text',
      defaultValue: 'این لیبل است'
    },
    fileInputPlaceholder: {
      control: 'text',
      defaultValue: 'متن پیشفرض'
    },
    fileInputDisabled: {
      control: 'boolean',
      defaultValue: false
    },
    fileInputErrorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا'
    },
    radioLabel: {
      control: 'text',
      defaultValue: 'زیر دیپلم'
    },
    radioValue: {
      control: 'text',
      defaultValue: '100'
    },
    radioDisabled: {
      control: 'boolean',
      defaultValue: false
    },
    textInputLabel: {
      control: 'text',
      defaultValue: 'این لیبل است'
    },
    textInputPlaceholder: {
      control: 'text',
      defaultValue: 'متن پیشفرض'
    },
    textInputDisabled: {
      control: 'boolean',
      defaultValue: false
    },
    textInputErrorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا'
    },
    textInputType: {
      control: 'select',
      options: ['text', 'password'],
      defaultValue: 'text'
    },
    textareaLabel: {
      control: 'text',
      defaultValue: 'توضیجات'
    },
    textareaHtmlElementName: {
      control: 'text',
      defaultValue: 'textarea-box'
    },
    textareaPlaceholder: {
      control: 'text',
      defaultValue: 'این پلیس هولدر است'
    },
    textareaMinHeight: {
      control: 'text',
      defaultValue: '120'
    },
    checkboxLabel: {
      control: 'text',
      defaultValue: 'ورزشی'
    },
    checkboxValue: {
      control: 'text',
      defaultValue: '100'
    },
    checkboxDisabled: {
      control: 'boolean',
      defaultValue: false
    },
    checkboxChecked: {
      control: 'boolean',
      defaultValue: false
    }
  }
};

const Template = (args) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError
  } = (0, _reactHookForm.useForm)();

  const onSubmit = (data) => {
    setError({
      message: 'کپچا معتبر نیست .',
      errors: { captcha: ['کپچا معتبر نیست .'] },
      status_code: 422
    });
  };

  const options = [
  'question 1',
  'question 2',
  'question 3'];


  return (/*#__PURE__*/
    _react.default.createElement("form", { onSubmit: handleSubmit(onSubmit) }, /*#__PURE__*/
    _react.default.createElement(_dropdown.Select, {
      htmlElementName: "select",
      placeholder: "\u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      register: register,
      control: control,
      defaultValue: 0,
      label: "select box",
      number: 1,
      required: false },

    !!options && options.map((option, key) => /*#__PURE__*/
    _react.default.createElement(_dropdown.SelectOption, { key: key, value: option, label: option })
    )
    ), /*#__PURE__*/

    _react.default.createElement(_fileInput.default, {
      htmlElementName: "file-input",
      register: register,
      control: control,
      label: args.fileInputLabel,
      description: "\u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 \u0627\u0631\u0633\u0627\u0644\u06CC \u0628\u0627\u06CC\u062F \u06A9\u0645\u062A\u0631 \u0627\u0632 \u06F4 \u0645\u06AF\u0627\u0628\u0627\u06CC\u062A \u0628\u0627\u0634\u062F",
      number: 2,
      placeholder: args.fileInputPlaceholder,
      disabled: args.fileInputDisabled,
      errorMessage: args.fileInputErrorMessage,
      required: false }
    ), /*#__PURE__*/

    _react.default.createElement(_radio.default, {
      groupName: "radio",
      label: "radio input",
      number: 3,
      register: register,
      control: control,
      required: false }, /*#__PURE__*/

    _react.default.createElement(_radioOption.default, {
      label: args.radioLabel,
      value: args.radioValue,
      isDisabled: args.radioDisabled }
    ), /*#__PURE__*/
    _react.default.createElement(_radioOption.default, { value: "200", label: "\u062F\u06CC\u067E\u0644\u0645" }), /*#__PURE__*/
    _react.default.createElement(_radioOption.default, { value: "300", label: "\u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_radioOption.default, { value: "400", label: "\u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u06CC \u0627\u0631\u0634\u062F" }), /*#__PURE__*/
    _react.default.createElement(_radioOption.default, { value: "500", label: "\u062F\u06A9\u062A\u0631\u0627" })
    ), /*#__PURE__*/

    _react.default.createElement(_textInput.default, {
      htmlElementName: "text-input",
      required: false,
      label: args.textInputLabel,
      number: 23,
      register: register,
      control: control,
      placeholder: args.textInputPlaceholder,
      disabled: args.textInputDisabled,
      errorMessage: args.textInputErrorMessage,
      type: args.textInputType,
      rtl: true }
    ), /*#__PURE__*/

    _react.default.createElement(_textInput.default, {
      htmlElementName: "text-input",
      type: "password",
      required: false,
      label: args.textInputLabel,
      number: 23,
      register: register,
      control: control,
      placeholder: args.textInputPlaceholder,
      disabled: args.textInputDisabled,
      errorMessage: args.textInputErrorMessage,
      rtl: true }
    ), /*#__PURE__*/

    _react.default.createElement(_textarea.default, {
      register: register,
      control: control,
      label: args.textareaLabel,
      htmlElementName: args.textareaHtmlElementName,
      placeholder: args.textareaPlaceholder,
      minHeight: args.textareaMinHeight,
      isDisabled: false,
      required: false,
      resize: "both",
      handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
      defaultValue: "\u0627\u06CC\u0646 \u06CC\u06A9 \u0628\u0627\u06A9\u0633 \u0645\u062A\u0646\u06CC \u0645\u06CC\u200C\u0628\u0627\u0634\u062F" }
    ), /*#__PURE__*/

    _react.default.createElement(_checkbox.default, {
      groupName: "checkbox",
      required: false,
      label: "\u062F\u0631 \u06A9\u062F\u0627\u0645 \u0645\u0648\u0636\u0648\u0639 \u0647\u0627 \u062A\u0648\u0627\u0646\u0627\u06CC\u06CC \u062F\u0627\u0631\u06CC\u062F",
      register: register,
      control: control }, /*#__PURE__*/

    _react.default.createElement(_checkboxOption.default, {
      label: args.checkboxLabel,
      value: args.checkboxValue,
      isDisabled: args.checkboxDisabled,
      isChecked: args.checkboxChecked,
      register: register }
    ), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "200", label: "\u0639\u0644\u0645\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "300", label: "\u0645\u0630\u0647\u0628\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "400", label: "\u0641\u0631\u0647\u0646\u06AF\u06CC" }), /*#__PURE__*/
    _react.default.createElement(_checkboxOption.default, { value: "500", label: "\u0647\u0646\u0631\u06CC" })
    ), /*#__PURE__*/

    _react.default.createElement(_captcha.default, {
      register: register,
      control: control,
      label: "\u06A9\u062F \u062A\u0635\u0648\u06CC\u0631\u06CC",
      htmlElementName: "captcha",
      imageUrl: "https://static.evand.net/captcha/0bb5a9832be7b86a2a0a646ae2fd1649.jpg",
      handleChange: (0, _addonActions.action)('trigger what you want to do in onChange function'),
      fetchData: () => console.log('fetching'),
      setValue: setValue }
    ), /*#__PURE__*/

    _react.default.createElement("button", { type: "submit" }, "submit")
    ));

};

const Default = exports.Default = Template.bind({});
Default.args = {
  fileInputLabel: 'این لیبل است',
  fileInputPlaceholder: 'متن پیشفرض',
  fileInputDisabled: false,
  fileInputErrorMessage: 'ارور زیبا',
  radioLabel: 'زیر دیپلم',
  radioValue: '100',
  radioDisabled: false,
  textInputLabel: 'این لیبل است',
  textInputPlaceholder: 'متن پیشفرض',
  textInputDisabled: false,
  textInputErrorMessage: 'ارور زیبا',
  textInputType: 'text',
  textareaLabel: 'توضیجات',
  textareaHtmlElementName: 'textarea-box',
  textareaPlaceholder: 'این پلیس هولدر است',
  textareaMinHeight: '120',
  checkboxLabel: 'ورزشی',
  checkboxValue: '100',
  checkboxDisabled: false,
  checkboxChecked: false
};