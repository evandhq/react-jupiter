"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _test = _interopRequireDefault(require("../../utils/test"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

describe('text input tests', () => {
  it('render simple text input', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { label: "this is label", htmlElementName: "eng name" }));
    const textInput = (0, _test.default)(component, 'text-input');

    expect(textInput.length).toBe(1);
  });

  it('render text input with placeholder', () => {
    const component = (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, { label: "this is label", htmlElementName: "eng name", placeholder: "hi guys" }));
    const textInput = (0, _test.default)(component, 'text-input');

    expect(textInput.find('input').prop('placeholder')).toBe('hi guys');
  });

  it('test text input id without id props', () => {
    const component = (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, { label: "this is label", htmlElementName: "eng name", placeholder: "hi guys" }));
    const textInput = (0, _test.default)(component, 'text-input');

    expect(textInput.find('input').prop('id')).toBe('text-engname');
  });

  it('render text input - full props', () => {
    const component = (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, { label: "this is label", htmlElementName: "eng name", placeholder: "hi guys", type: "text", id: "hiiii-id" }));
    const textInput = (0, _test.default)(component, 'text-input');

    expect(textInput.find('input').prop('id')).toBe('hiiii-id');
    expect(textInput.find('input').prop('type')).toBe('text');
    expect(textInput.find('input').prop('placeholder')).toBe('hi guys');
    expect(textInput.find('input').prop('name')).toBe('eng name');
    expect(textInput.length).not.toBe(0);
  });

  it('render disabled input', () => {
    const component = (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, { label: "this is label", htmlElementName: "eng name", disabled: true }));
    const textInput = (0, _test.default)(component, 'text-input');

    expect(textInput.find('input').prop('disabled')).toBe(true);
  });

  it('render with or without text-input-description', () => {
    const componentWithDesc = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { label: "this is label", htmlElementName: "with desc", description: "hiiiiii" }));
    const componentWithoutDesc = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { label: "this is label", htmlElementName: "without desc" }));
    const textInputDescription01 = (0, _test.default)(componentWithDesc, 'text-input-description');
    const textInputDescription02 = (0, _test.default)(componentWithoutDesc, 'text-input-description');

    expect(textInputDescription01.length).toBe(1);
    expect(textInputDescription02.length).toBe(0);
  });

  it('render with or err msg', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { label: "this is label", htmlElementName: "with desc", description: "hiiiiii", errorMessage: "this is a good err" }));
    const textInputErrorMessage = (0, _test.default)(component, 'error-message');

    expect(textInputErrorMessage.length).toBe(1);
    expect(textInputErrorMessage.children().text()).toBe('this is a good err');
  });
});