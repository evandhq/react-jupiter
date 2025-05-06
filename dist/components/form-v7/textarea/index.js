"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactHookForm = require("react-hook-form");
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _theme = _interopRequireDefault(require("../theme"));
var _errorMsg = _interopRequireDefault(require("../errorMsg"));
var _label = _interopRequireDefault(require("../label"));
var _index = _interopRequireDefault(require("./index.style"));
var _index2 = require("../index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}
















const Textarea = (_ref) => {let {
    htmlElementName = 'textarea-element',
    label = '',
    isDisabled = false,
    defaultValue = '',
    placeholder = '',
    resize = 'none',
    minHeight = 120,
    handleChange = () => {},
    required = false,
    number = null,
    register,
    control
  } = _ref;return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_index2.Fieldset, null, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_label.default, { htmlFor: htmlElementName, label: label, number: number, required: required }), /*#__PURE__*/

    _react.default.createElement(_reactHookForm.Controller, {
      name: htmlElementName,
      control: control,
      rules: { required: required ? 'این فیلد اجباری است' : false },
      render: (_ref2) => {let { fieldState } = _ref2;return (/*#__PURE__*/
          _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
          _react.default.createElement(_index.default, _extends({
            name: htmlElementName,
            placeholder: placeholder,
            resize: resize,
            defaultValue: defaultValue,
            minHeight: minHeight },
          register(htmlElementName, {
            onChange: handleChange,
            disabled: isDisabled
          }))
          ), /*#__PURE__*/
          _react.default.createElement(_errorMsg.default, { errorMessage: fieldState && fieldState.error?.message })
          ));} }

    )
    )
    ));};var _default = exports.default =


Textarea;