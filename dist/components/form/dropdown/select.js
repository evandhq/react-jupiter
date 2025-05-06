"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _theme = _interopRequireDefault(require("../theme"));
var _typography = require("../../typography");
var _errorMsg = _interopRequireDefault(require("../errorMsg"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}












const Select = (_ref) =>









{let { htmlElementName = 'select-element', defaultValue = '', placeholder = '', label = '', isDisabled = false, handleChange = () => {}, errorMessage = '', inputRef = null, children } = _ref;
  function onChange(e) {
    handleChange(e.target.value);
  }

  const renderSelect = () => /*#__PURE__*/
  _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
  _react.default.createElement(_index.SelectButton, { disabled: isDisabled }, /*#__PURE__*/
  _react.default.createElement(_index.StyledSelect, {
    disabled: isDisabled,
    onChange: onChange,
    name: htmlElementName,
    defaultValue: placeholder ? '' : defaultValue,
    "data-test": "select",
    ref: inputRef },

  placeholder && /*#__PURE__*/
  _react.default.createElement("option", { value: "", disabled: true }, placeholder),

  children
  )
  ), /*#__PURE__*/
  _react.default.createElement(_errorMsg.default, { errorMessage: errorMessage })
  );


  if (label) {
    return (/*#__PURE__*/
      _react.default.createElement("label", { htmlFor: htmlElementName }, /*#__PURE__*/
      _react.default.createElement(_typography.Text, { size: 14, bold: true, isDisplayBlock: true },
      label
      ),
      renderSelect()
      ));

  }
  return renderSelect();
};var _default = exports.default =

Select;