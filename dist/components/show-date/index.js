"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typography = require("../typography");
var _date = require("../utils/date");
var _numbers = require("../utils/numbers");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const ShowDate = (_ref) => {let { fontSize = 12, color = 'default', date } = _ref;return (/*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: fontSize, color: color, "data-test": "show-date" },
    (0, _numbers.englishNumberToPersianInString)((0, _date.convertToJalaali)(date, 'dddd jD jMMMM jYYYY ساعت HH:mm'))
    ));};


ShowDate.propTypes = {
  date: _propTypes.default.oneOfType([
  _propTypes.default.string,
  _propTypes.default.object]
  ).isRequired,
  fontSize: _propTypes.default.oneOfType([
  _propTypes.default.string,
  _propTypes.default.number]
  ),
  color: _propTypes.default.oneOf(['default', 'red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'gray'])
};var _default = exports.default =

ShowDate;