"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _test = _interopRequireDefault(require("../../utils/test"));
var _select = _interopRequireDefault(require("./select"));
var _option = _interopRequireDefault(require("./option"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

describe('dropdown (select-option) tests', () => {
  it('render simple select tag', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_select.default, null));
    const select = (0, _test.default)(component, 'select');

    expect(select.length).toBe(1);
  });
  it('render simple option tag', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_option.default, { label: "hi", value: "hi_val" }));
    const option = (0, _test.default)(component, 'select-option');

    expect(option.length).toBe(1);
  });
});