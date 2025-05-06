"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
require("jest-styled-components");

var _index = _interopRequireDefault(require("./index"));
var _test = _interopRequireDefault(require("../utils/test"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.shallow)(/*#__PURE__*/
      _react.default.createElement(_index.default, _extends({
        date: props.date,
        dateFormat: props.dateFormat },
      props)
      )
    ));};


describe('ShowDate component', () => {
  it('should render correctly', () => {
    const component = setupShallow({ date: new Date() });
    const DateBookmark = (0, _test.default)(component, 'show-date');
    expect(DateBookmark.length).toBe(1);
  });
});