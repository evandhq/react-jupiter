"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _typography = require("../../typography");
var _numbers = require("../../utils/numbers");
var _index = _interopRequireDefault(require("./index.style"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}








function Label(_ref)

{let { label = null, number = null, required = false, htmlFor = null } = _ref;
  return (/*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null,
    label && /*#__PURE__*/
    _react.default.createElement(_index.default, { htmlFor: htmlFor }, /*#__PURE__*/
    _react.default.createElement(_typography.Text, { bold: true, size: 14 },
    !!number && `${(0, _numbers.toPersianNumber)(number)}- `,
    label,
    !!required && /*#__PURE__*/_react.default.createElement("span", { className: "required" }, "*")
    )
    )

    ));

}var _default = exports.default =

Label;