"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _typography = require("../typography");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}






function MenuItem(_ref) {let { label, handleClick = () => {}, color = 'default' } = _ref;
  return (/*#__PURE__*/
    _react.default.createElement(_typography.Text, {
      size: 14,
      bold: true,
      onClick: handleClick,
      "data-test": "product-menu-item",
      color: color },

    label
    ));

}var _default = exports.default =

MenuItem;