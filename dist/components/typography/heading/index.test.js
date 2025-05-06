"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
require("jest-styled-components");


var _index = _interopRequireDefault(require("./index"));
var _test = _interopRequireDefault(require("../../utils/test"));
var _theme = _interopRequireDefault(require("../theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ level: props.level }, props), props.children)));};


const setupMount = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ level: props.level }, props), props.children)));};


describe('Heading component', () => {
  it('Should render large H1 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 1 });
    const H1 = (0, _test.default)(component, 'h1-tag');
    expect(H1.length).toBe(1);
  });

  it('Should render large H1 component without error', () => {
    const H1 = setupMount({ children: 'تست', level: 1 });
    expect(H1).toHaveStyleRule('font-size', `${_theme.default.h1SizeMedium}px`);
    expect(H1).toHaveStyleRule('line-height', `${_theme.default.h1SizeMedium * _theme.default.lineHeightRatio}px`);
    expect(H1).toHaveStyleRule('color', _theme.default.defaultColor);
    H1.unmount();
  });

  it('Should render H2 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 2 });
    const H2 = (0, _test.default)(component, 'h2-tag');
    expect(H2.length).toBe(1);
  });

  it('Should render small H2 component without error', () => {
    const H2 = setupMount({ children: 'تست', level: 2, size: 'sm' });
    expect(H2).toHaveStyleRule('font-size', `${_theme.default.h2SizeSmall}px`);
    expect(H2).toHaveStyleRule('line-height', `${_theme.default.h2SizeSmall * _theme.default.lineHeightRatio}px`);
    expect(H2).toHaveStyleRule('color', _theme.default.defaultColor);
    H2.unmount();
  });

  it('Should render H3 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 3 });
    const H3 = (0, _test.default)(component, 'h3-tag');
    expect(H3.length).toBe(1);
  });

  it('Should render large H3 component without error', () => {
    const H3 = setupMount({ children: 'تست', level: 3, size: 'lg' });
    expect(H3).toHaveStyleRule('font-size', `${_theme.default.h3SizeLarge}px`);
    expect(H3).toHaveStyleRule('line-height', `${_theme.default.h3SizeLarge * _theme.default.lineHeightRatio}px`);
    expect(H3).toHaveStyleRule('color', _theme.default.defaultColor);
    H3.unmount();
  });

  it('Should render H4 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 4 });
    const H4 = (0, _test.default)(component, 'h4-tag');
    expect(H4.length).toBe(1);
  });

  it('Should render small H4 component without error', () => {
    const H4 = setupMount({ children: 'تست', level: 4, size: 'sm' });
    expect(H4).toHaveStyleRule('font-size', `${_theme.default.h4SizeSmall}px`);
    expect(H4).toHaveStyleRule('line-height', `${_theme.default.h4SizeSmall * _theme.default.lineHeightRatio}px`);
    expect(H4).toHaveStyleRule('color', _theme.default.defaultColor);
    H4.unmount();
  });

  it('Should render H5 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 5 });
    const H5 = (0, _test.default)(component, 'h5-tag');
    expect(H5.length).toBe(1);
  });

  it('Should render small H5 component without error', () => {
    const H5 = setupMount({ children: 'تست', level: 5, size: 'sm' });
    expect(H5).toHaveStyleRule('font-size', `${_theme.default.h5SizeSmall}px`);
    expect(H5).toHaveStyleRule('line-height', `${_theme.default.h5SizeSmall * _theme.default.lineHeightRatio}px`);
    expect(H5).toHaveStyleRule('color', _theme.default.defaultColor);
    H5.unmount();
  });

  it('Should render H6 component without error', () => {
    const component = setupShallow({ children: 'تست', level: 6 });
    const H6 = (0, _test.default)(component, 'h6-tag');
    expect(H6.length).toBe(1);
  });

  it('Should render medium H6 component without error', () => {
    const H6 = setupMount({ children: 'تست', level: 6, size: 'md' });
    expect(H6).toHaveStyleRule('font-size', `${_theme.default.h6SizeMedium}px`);
    expect(H6).toHaveStyleRule('line-height', `${_theme.default.h6SizeMedium * _theme.default.lineHeightRatio}px`);
    expect(H6).toHaveStyleRule('color', _theme.default.defaultColor);
    H6.unmount();
  });


  it('Should not render H1 when children prop is undefined', () => {
    const component = setupShallow({ level: 1 });
    const H1 = (0, _test.default)(component, 'h1-tag');
    expect(H1.length).toBe(0);
  });

  it('Level prop should be between 1 and 5', () => {
    const H1 = setupMount({ children: 'تست', level: 1 });
    expect(H1.prop('level')).toBeGreaterThanOrEqual(1);
    expect(H1.prop('level')).toBeLessThanOrEqual(5);
    H1.unmount();
  });

  it('Should render H1 when level prop is undefined', () => {
    const component = setupShallow({ children: 'تست' });
    const H1 = (0, _test.default)(component, 'h1-tag');
    expect(H1.length).toBe(1);
  });
});