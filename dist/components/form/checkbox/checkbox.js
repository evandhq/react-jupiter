"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _typography = require("../../typography");
var _errorMsg = _interopRequireDefault(require("../errorMsg"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}











const Checkbox = (props) => {
  const {
    groupName = 'radio-element',
    label = '',
    handleChange = () => {},
    isDisabled = false,
    type = 'horizontal',
    errorMessage = '',
    children
  } = props;
  const radioElements = _react.default.Children.toArray(children);

  return (/*#__PURE__*/
    _react.default.createElement(_index.Fieldset, { onChange: handleChange }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null),
    label && /*#__PURE__*/
    _react.default.createElement("legend", null, /*#__PURE__*/
    _react.default.createElement(_typography.Text, { bold: true, size: 14 },
    label
    )
    ), /*#__PURE__*/

    _react.default.createElement(_index.CheckboxWrapper, { type: type },
    radioElements.map(
      (radioElement) =>
      isDisabled ?
      _react.default.cloneElement(radioElement, { groupName, isDisabled }) :

      _react.default.cloneElement(radioElement, { groupName })


    )
    ), /*#__PURE__*/
    _react.default.createElement(_errorMsg.default, { errorMessage: errorMessage })
    ));

};var _default = exports.default =
Checkbox;