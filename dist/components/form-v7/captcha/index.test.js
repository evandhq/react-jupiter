"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _test = _interopRequireDefault(require("../../utils/test"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

describe('captcha', () => {
  it('render captcha box', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { src: "wrong-src", handleRetryCaptcha: () => {} }));
    const chaptchaBox = (0, _test.default)(component, 'captcha-box');

    expect(chaptchaBox.length).toBe(1);
  });
  it('render captcha input', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { src: "wrong-src", handleRetryCaptcha: () => {} }));
    const chaptchaInput = (0, _test.default)(component, 'captcha-input');

    expect(chaptchaInput.length).toBe(1);
  });
  it('render captcha img', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { src: "wrong-src", handleRetryCaptcha: () => {} }));
    const chaptchaImg = (0, _test.default)(component, 'captcha-img');

    expect(chaptchaImg.length).toBe(1);
  });
  it('render retry button', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { src: "wrong-src", handleRetryCaptcha: () => {} }));
    const chaptchaRetry = (0, _test.default)(component, 'captcha-retry');

    expect(chaptchaRetry.length).toBe(1);
  });
});