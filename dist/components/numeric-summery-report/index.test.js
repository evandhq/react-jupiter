"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _test = _interopRequireDefault(require("../utils/test"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ data: props.data }, props))));};


describe('Numeric Summery Report', () => {
  it('should render correctly', () => {
    const component = setupShallow({
      data: [
      { id: 1, title: 'برگزار شده', count: 12 },
      { id: 2, title: 'فعال', count: 2 },
      { id: 3, title: 'دنبال کننده‌ها', count: 346 }]

    });
    const NumericSummeryReport = (0, _test.default)(component, 'numeric-summery-report');
    expect(NumericSummeryReport.length).toBe(1);
  });
});