"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactHookForm = require("react-hook-form");
var _styledComponents = require("styled-components");
var _theme = _interopRequireDefault(require("../theme"));
var _typography = require("../../typography");
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}









const CheckboxOption = (_ref) =>

{let { label, value, isDisabled = false, isChecked = false, groupName, register, handleOnchange } = _ref;
  const itemId = `${groupName}-${value}`;

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement("label", { htmlFor: itemId }, /*#__PURE__*/
    _react.default.createElement(_index.Input, _extends({
      type: "checkbox",
      id: itemId,
      name: groupName,
      value: value,
      defaultChecked: isChecked },
    register(groupName, {
      disabled: isDisabled,
      onChange: handleOnchange
    }))
    ), /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: 14 },
    label
    )
    )
    ));

};var _default = exports.default =

CheckboxOption;