"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}






const SelectOption = (props) => {
  const { label, value, isDisabled = false } = props;

  return (/*#__PURE__*/
    _react.default.createElement("option", {
      disabled: isDisabled,
      value: value,
      "data-test": "select-option" },

    label
    ));

};var _default = exports.default =

SelectOption;