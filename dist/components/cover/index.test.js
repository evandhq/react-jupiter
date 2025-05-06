"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _reactRouterDom = require("react-router-dom");
var _test = _interopRequireDefault(require("../utils/test"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

describe('Cover', () => {
  it('should render correctly(simple-cover)', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, null));
    const cover = (0, _test.default)(component, 'cover');
    expect(cover.length).toBe(1);
  });

  it('should render correctly(external link-cover)', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { linkTo: "http://yahoo.com" }));
    const cover = (0, _test.default)(component, 'cover');
    expect(cover.length).toBe(1);
  });

  it('should render correctly(internal link-cover)', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { renderLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/components/card" }, element) }));
    const cover = (0, _test.default)(component, 'cover');
    expect(cover.length).toBe(1);
  });
});