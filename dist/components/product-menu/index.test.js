"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _test = _interopRequireDefault(require("../utils/test"));
var _menu = _interopRequireDefault(require("./menu"));
var _menuItem = _interopRequireDefault(require("./menu-item"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

describe('ProductMenu', () => {
  it('render nav Menu', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_menu.default, null));
    const wrapper = (0, _test.default)(component, 'product-menu');
    expect(wrapper.length).toBe(1);
  });
  it('render ol', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_menu.default, null));
    const wrapper = (0, _test.default)(component, 'product-menu').find('ol');
    expect(wrapper.length).toBe(1);
  });
  it('render menu Item', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/
      _react.default.createElement(_menu.default, null, /*#__PURE__*/
      _react.default.createElement(_menuItem.default, { label: "hi" })
      )
    );
    const wrapper = (0, _test.default)(component, 'product-menu-item');
    expect(wrapper.length).toBe(1);
  });
});