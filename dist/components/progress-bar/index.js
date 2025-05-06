"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _index = require("./index.styles");
var _numbers = require("../utils/numbers");
var _icon = _interopRequireDefault(require("../icon"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const ProgressBar = (_ref) => {let { width, labels, points } = _ref;
  const percentWidth = width * 100 / points.colleague;

  return (/*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
    _react.default.createElement(_index.Names, { points: points },
    labels.map((label, key) => /*#__PURE__*/
    _react.default.createElement("span", { key: key },
    label, /*#__PURE__*/
    _react.default.createElement(_icon.default, { name: "arrow-drop-down", size: "sm" })
    )
    )
    ), /*#__PURE__*/
    _react.default.createElement(_index.ProgressBar, { width: percentWidth }, /*#__PURE__*/
    _react.default.createElement("div", { className: "filled" }, /*#__PURE__*/
    _react.default.createElement("span", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627:",

    (0, _numbers.toPersianNumber)(width, {})
    )
    )
    ), /*#__PURE__*/
    _react.default.createElement(_index.Numbers, { points: points }, /*#__PURE__*/
    _react.default.createElement("span", null, "\u06F0"), /*#__PURE__*/
    _react.default.createElement("span", null, (0, _numbers.toPersianNumber)(points.partner)), /*#__PURE__*/
    _react.default.createElement("span", null, (0, _numbers.toPersianNumber)(points.colleague))
    )
    ));

};

ProgressBar.propTypes = {
  width: _propTypes.default.number.isRequired,
  labels: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  points: _propTypes.default.instanceOf({
    partner: _propTypes.default.number,
    colleague: _propTypes.default.number
  }).isRequired
};var _default = exports.default =

ProgressBar;