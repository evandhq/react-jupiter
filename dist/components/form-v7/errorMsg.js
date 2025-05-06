"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _icon = _interopRequireDefault(require("../icon"));
var _typography = require("../typography");
var _spacing = require("../spacing");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const ErrorMsg = (_ref) => {let { errorMessage = '' } = _ref;
  if (errorMessage) {
    return (/*#__PURE__*/
      _react.default.createElement(_spacing.Margin, { top: 4 }, /*#__PURE__*/
      _react.default.createElement(_icon.default, { name: "error", color: "red", size: "sm", stickyRight: true }), /*#__PURE__*/
      _react.default.createElement(_typography.Text, { bold: true, size: 10, color: "red", "data-test": "error-message" },
      errorMessage
      )
      ));

  }

  return null;
};var _default = exports.default =

ErrorMsg;