"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _typography = require("../typography");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}











function TableHeaderRow(_ref) {let { columns } = _ref;
  return (/*#__PURE__*/
    _react.default.createElement("tr", null,
    columns.map((headerItem) => /*#__PURE__*/
    _react.default.createElement("th", { key: headerItem.key }, /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: 16, bold: true },
    headerItem.label
    )
    )
    )
    ));

}var _default = exports.default =

TableHeaderRow;