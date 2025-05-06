"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
require("jest-styled-components");

var _index = _interopRequireDefault(require("./index"));
var _test = _interopRequireDefault(require("../../utils/test"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.shallow)(/*#__PURE__*/
      _react.default.createElement(_index.default, _extends({
        external: props.external,
        target: props.target,
        size: props.size,
        strong: props.strong,
        emphasized: props.emphasized },
      props),

      props.children
      )
    ));};


describe('Link component', () => {
  it('Should not render any thing', () => {
    const component = setupShallow({
      children: 'لینک داخلی'
    });
    const Link = (0, _test.default)(component, 'internal-link');
    expect(Link.length).toBe(0);
  });

  it('Should render an internal Link', () => {
    const component = setupShallow({
      children: 'لینک داخلی',
      to: 'http://google.com'
    });
    const Link = (0, _test.default)(component, 'internal-link');
    expect(Link.length).toBe(1);
  });

  it('Should render an internal Link when external prop false', () => {
    const component = setupShallow({
      children: 'لینک داخلی',
      to: 'http://google.com',
      external: false
    });
    const Link = (0, _test.default)(component, 'internal-link');
    expect(Link.length).toBe(1);
  });

  it('Should render an internal Link when external prop is true', () => {
    const component = setupShallow({
      children: 'لینک خارجی',
      to: 'http://google.com',
      external: true
    });
    const Link = (0, _test.default)(component, 'external-link');
    expect(Link.length).toBe(1);
  });
});