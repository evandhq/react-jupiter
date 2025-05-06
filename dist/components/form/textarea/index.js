"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _typography = require("../../typography");
var _theme = _interopRequireDefault(require("../theme"));
var _errorMsg = _interopRequireDefault(require("../errorMsg"));
var _index = _interopRequireDefault(require("./index.style"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}














const Textarea = (_ref) => {let {
    htmlElementName = 'textarea-element',
    label = '',
    isDisabled = false,
    defaultValue = '',
    placeholder = '',
    resize = 'none',
    minHeight = 120,
    handleChange = () => {},
    errorMessage = '',
    inputRef = null
  } = _ref;return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null),
    label && /*#__PURE__*/
    _react.default.createElement("label", { htmlFor: htmlElementName }, /*#__PURE__*/
    _react.default.createElement(_typography.Text, { bold: true, size: 14 },
    label
    )
    ), /*#__PURE__*/


    _react.default.createElement(_index.default, {
      name: htmlElementName,
      disabled: isDisabled,
      placeholder: placeholder,
      resize: resize,
      minHeight: minHeight,
      onChange: handleChange,
      ref: inputRef },

    defaultValue
    ), /*#__PURE__*/
    _react.default.createElement(_errorMsg.default, { errorMessage: errorMessage })
    ));};var _default = exports.default =


Textarea;