"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _index = _interopRequireDefault(require("./index"));
var _icon = _interopRequireDefault(require("../icon"));
var _typography = require("../typography");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

describe('ProductProperties Tests', () => {
  it('should render icon and text with special property', () => {
    const list = [{ iconName: 'watch-later', text: 'watch text' }];
    const component = (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, { list: list }));
    const IconComponent = component.find(_icon.default);
    const TextComponent = component.find(_typography.Text);

    expect(IconComponent.length).toBe(1);
    expect(TextComponent.length).toBe(1);
  });

  it('should render multiple ProductProperty', () => {
    const list = [
    { iconName: 'watch-later', text: 'watch text' },
    { iconName: 'alarm-off', text: 'another text' },
    { iconName: 'aspect-ratio', text: 'and another text' }];

    const component = (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, { list: list }));
    const IconComponent = component.find(_icon.default);
    const TextComponent = component.find(_typography.Text);

    expect(IconComponent.length).toBe(3);
    expect(TextComponent.length).toBe(3);
  });
});