"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _typography = require("../../typography");
var _index = require("./index.style");
var _theme = _interopRequireDefault(require("../theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}









const RadioOption = (_ref) =>






{let { label, value, isDisabled = false, defaultCheckedValue = '', inputRef = null, groupName } = _ref;
  const itemId = `${groupName}-${value}-${label.split(' ').join('')}`;

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement("label", { htmlFor: itemId }, /*#__PURE__*/
    _react.default.createElement(_index.Input, {
      type: "radio",
      id: itemId,
      name: groupName,
      value: value,
      defaultChecked: defaultCheckedValue === value,
      disabled: isDisabled,
      ref: inputRef }
    ), /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: 14 },
    label
    )
    )
    ));

};var _default = exports.default =

RadioOption;