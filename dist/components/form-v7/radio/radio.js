"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = require("styled-components");
var _reactHookForm = require("react-hook-form");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _errorMsg = _interopRequireDefault(require("../errorMsg"));
var _index = require("./index.style");
var _index2 = require("../index.style");
var _label = _interopRequireDefault(require("../label"));
var _theme = _interopRequireDefault(require("../theme"));
var _typography = require("../../typography");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}















const Radio = (_ref) =>











{let { groupName = 'radio-element', label = '', handleChange = () => {}, defaultCheckedValue = '', isDisabled = false, type = 'horizontal', required = false, number = null, control, register, children } = _ref;
  const radioElements = _react.default.Children.toArray(children);

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_index2.Fieldset, { onChange: handleChange }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_label.default, { label: label, number: number, required: required }), /*#__PURE__*/
    _react.default.createElement(_reactHookForm.Controller, {
      name: groupName,
      control: control,
      rules: { required: required ? 'این فیلد اجباری است' : false },
      render: (_ref2) => {let { fieldState } = _ref2;return (/*#__PURE__*/
          _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
          _react.default.createElement(_index.RadioWrapper, { type: type },
          radioElements.map(
            (radioElement) =>
            isDisabled ?
            _react.default.cloneElement(radioElement, {
              groupName, defaultCheckedValue, isDisabled, register
            }) :

            _react.default.cloneElement(radioElement, { groupName, defaultCheckedValue, register })


          )
          ), /*#__PURE__*/
          _react.default.createElement(_errorMsg.default, { errorMessage: fieldState && fieldState.error?.message })
          ));} }

    )
    )
    ));

};var _default = exports.default =

Radio;