"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireDefault(require("react"));
var _globalStyle = _interopRequireDefault(require("../globalStyle"));
var _typography = require("../typography");
var _numbers = require("../utils/numbers");
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}






const NumericSummeryReport = (_ref) => {let { data, textColor = 'gray' } = _ref;return (/*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_index.ListContainer, { "data-test": "numeric-summery-report" },
    data.map((report) => /*#__PURE__*/
    _react.default.createElement(_index.ListItem, { key: report.id }, /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: "12", color: textColor }, report.title), /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: "16", bold: true }, (0, _numbers.toPersianNumber)(report.count, {}))
    )
    )
    )
    ));};var _default = exports.default =


NumericSummeryReport;