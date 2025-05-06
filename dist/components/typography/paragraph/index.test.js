"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
require("jest-styled-components");

var _index = _interopRequireDefault(require("./index"));
var _test = _interopRequireDefault(require("../../utils/test"));
var _theme = _interopRequireDefault(require("../theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ size: props.size }, props), props.children)));};


const setupMount = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ size: props.size }, props), props.children)));};


describe('Paragraph component', () => {
  it('Should render Paragraph', () => {
    const component = setupShallow({
      children: 'این یک متن بلند برای پاراگراف است'
    });
    const Paragraph = (0, _test.default)(component, 'paragraph');
    expect(Paragraph.length).toBe(1);
  });

  it('Should not render Paragraph', () => {
    const component = setupShallow();
    const Paragraph = (0, _test.default)(component, 'paragraph');
    expect(Paragraph.length).toBe(0);
  });

  it('Should render Paragraph with font-size 14 and proper line-height', () => {
    const Paragraph = setupMount({
      children: 'این یک متن بلند برای پاراگراف است'
    });
    expect(Paragraph).toHaveStyleRule('font-size', `${_theme.default.defaultSize}px`);
    expect(Paragraph).toHaveStyleRule('line-height', `${_theme.default.defaultSize * _theme.default.lineHeightRatio}px`);
  });

  it('Should render Paragraph with font-size 15', () => {
    const Paragraph = setupMount({
      children: 'این یک متن بلند برای پاراگراف است',
      size: 15
    });
    expect(Paragraph).toHaveStyleRule('font-size', '15px');
  });
});