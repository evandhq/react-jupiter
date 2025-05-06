"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _styledComponents = require("styled-components");
var _theme = _interopRequireDefault(require("../theme"));
var _errorMsg = _interopRequireDefault(require("../errorMsg"));
var _icon = _interopRequireDefault(require("../../icon"));
var _button = _interopRequireDefault(require("../../button"));
var _label = _interopRequireDefault(require("../label"));
var _index = require("../text-input/index.style");
var _display = _interopRequireDefault(require("../../display"));
var _index2 = require("../index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}












function Captcha(_ref)








{let { classNames = '', loading = false, number = null, htmlElementName, label, imageUrl, control, fetchData } = _ref;
  const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

  const fixNumbers = (str) => {
    let result = str;
    if (typeof str === 'string') {
      for (let i = 0; i < 10; i++) {
        result = result.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return result;
  };

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_index2.Fieldset, null, /*#__PURE__*/
    _react.default.createElement("div", { className: classNames }, /*#__PURE__*/
    _react.default.createElement(_reactHookForm.Controller, {
      name: htmlElementName,
      control: control,
      rules: {
        required: 'این فیلد اجباری است',
        pattern: {
          value: /^[۰۱۲۳۴۵۶۷۸۹0-9]{4}$/,
          message: 'لطفا فقط عدد وارد کنید.'
        }
      },
      defaultValue: "",
      render: (_ref2) => {let { field: { onChange, value }, fieldState } = _ref2;return (/*#__PURE__*/
          _react.default.createElement(_display.default, { display: "block" }, /*#__PURE__*/
          _react.default.createElement(_label.default, { htmlFor: htmlElementName, label: label, number: number, required: true }), /*#__PURE__*/
          _react.default.createElement(_display.default, { display: "flex" }, /*#__PURE__*/
          _react.default.createElement(_display.default, { display: "flex", width: "100%" }, /*#__PURE__*/
          _react.default.createElement(_index.Input, {
            id: `${'text'}-${htmlElementName.split(' ').join('')}`,
            name: htmlElementName,
            type: "text",
            rtl: false,
            value: value,
            onChange: (e) => {
              onChange(fixNumbers(e.target.value));
            },
            className: "captcha-input" }
          ), /*#__PURE__*/
          _react.default.createElement("img", {
            width: "auto",
            height: "40px",
            src: imageUrl,
            alt: "captcha-img",
            loading: "lazy",
            "data-test": "captcha-img" }
          )
          ), /*#__PURE__*/
          _react.default.createElement(_button.default, { type: "button", size: "sm", styleType: "tertiary", onClick: fetchData, disabled: loading }, /*#__PURE__*/
          _react.default.createElement(_icon.default, { name: loading ? 'loading' : 'refresh' })
          )
          ), /*#__PURE__*/
          _react.default.createElement(_errorMsg.default, { errorMessage: fieldState && fieldState.error?.message })
          ));} }

    )
    )
    )
    ));

}var _default = exports.default =

Captcha;