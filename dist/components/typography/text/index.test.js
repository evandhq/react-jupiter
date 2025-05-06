"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
require("jest-styled-components");

var _index = _interopRequireDefault(require("./index"));
var _test = _interopRequireDefault(require("../../utils/test"));
var _theme = _interopRequireDefault(require("../theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.shallow)(/*#__PURE__*/
      _react.default.createElement(_index.default, _extends({
        size: props.size,
        color: props.color,
        underline: props.underline,
        lineThrough: props.lineThrough,
        strong: props.strong,
        emphasized: props.emphasized,
        subScript: props.subScript,
        supScript: props.supScript,
        marked: props.marked,
        label: props.label },
      props),

      props.children
      )
    ));};


const setupMount = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.mount)(/*#__PURE__*/
      _react.default.createElement(_index.default, _extends({
        size: props.size,
        color: props.color,
        underline: props.underline,
        lineThrough: props.lineThrough,
        strong: props.strong,
        emphasized: props.emphasized,
        subScript: props.subScript,
        supScript: props.supScript,
        marked: props.marked,
        label: props.label },
      props),

      props.children
      )
    ));};


describe('Text component', () => {
  it('Should not render anything', () => {
    const component = setupShallow({});
    const Text = (0, _test.default)(component, 'span');
    expect(Text.length).toBe(0);
  });

  it('Should render simple Text with span tag', () => {
    const component = setupShallow({
      children: 'تکست ساده'
    });
    const Text = (0, _test.default)(component, 'span');
    expect(Text.length).toBe(1);
  });

  it('Should render simple Text with strong tag', () => {
    const component = setupShallow({
      children: 'تکست استرانگ',
      strong: true
    });
    const Text = (0, _test.default)(component, 'strong');
    expect(Text.length).toBe(1);
  });

  it('Should render simple Text with em tag', () => {
    const component = setupShallow({
      children: 'تکست کج',
      emphasized: true
    });
    const Text = (0, _test.default)(component, 'emphasized');
    expect(Text.length).toBe(1);
  });

  it('Should render simple Text with strong tag', () => {
    const component = setupShallow({
      children: 'تکست استرانگ',
      strong: true,
      emphasized: true,
      subScript: true,
      supScript: true
    });
    const Text = (0, _test.default)(component, 'strong');
    expect(Text.length).toBe(1);
  });

  it('Should render simple Text with strong tag', () => {
    const component = setupShallow({
      children: 'تکست استرانگ',
      strong: true,
      emphasized: true,
      subScript: true,
      supScript: true
    });
    const Text = (0, _test.default)(component, 'strong');
    expect(Text.length).toBe(1);
  });

  it('Should render subScript text', () => {
    const component = setupShallow({
      children: 'تکست پایین‌نویس',
      subScript: true
    });
    const Text = (0, _test.default)(component, 'subScript');
    expect(Text.length).toBe(1);
  });

  it('Should render supScript text', () => {
    const component = setupShallow({
      children: 'تکست بالا‌نویس',
      supScript: true
    });
    const Text = (0, _test.default)(component, 'supScript');
    expect(Text.length).toBe(1);
  });

  it('Should render subScript text when both subScript and supScript prop is true', () => {
    const component = setupShallow({
      children: 'تکست پایین‌نویس',
      subScript: true,
      supScript: true
    });
    const TextSub = (0, _test.default)(component, 'subScript');
    const TextSup = (0, _test.default)(component, 'supScript');
    expect(TextSub.length).toBe(1);
    expect(TextSup.length).toBe(0);
  });

  it('Should render a strong text with default color and lineThrough', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      strong: true,
      lineThrough: true
    });
    expect(Text).toHaveStyleRule('color', _theme.default.defaultColor);
    expect(Text).toHaveStyleRule('text-decoration', 'line-through');
    Text.unmount();
  });

  it('Should render a strong text with red color and underline', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      strong: true,
      underline: true
    });
    expect(Text).toHaveStyleRule('text-decoration', 'underline');
    Text.unmount();
  });

  it('Should render a strong text as label', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      strong: true,
      label: true
    });
    expect(Text).toHaveStyleRule('background-color', _theme.default.colors.gray400);
    expect(Text).toHaveStyleRule('padding', '2px 8px');
    expect(Text).toHaveStyleRule('border-radius', '2px');
    Text.unmount();
  });

  it('Should render a strong text as marked', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      strong: true,
      marked: true
    });
    expect(Text).toHaveStyleRule('background-color', _theme.default.colors.blue200);
    Text.unmount();
  });

  it('Should render a emphasized text with underline', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      emphasized: true,
      underline: true
    });
    expect(Text).toHaveStyleRule('color', _theme.default.defaultColor);
    expect(Text).toHaveStyleRule('text-decoration', 'underline');
    Text.unmount();
  });

  it('Should render a emphasized text with lineThrough', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      emphasized: true,
      lineThrough: true
    });
    expect(Text).toHaveStyleRule('color', _theme.default.defaultColor);
    expect(Text).toHaveStyleRule('text-decoration', 'line-through');
    Text.unmount();
  });

  it('Should render a emphasized text with bold weight', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      emphasized: true,
      strong: true
    });
    expect(Text).toHaveStyleRule('color', _theme.default.defaultColor);
    expect(Text).toHaveStyleRule('font-style', 'italic');
    Text.unmount();
  });

  it('Should render text with default size and color', () => {
    const Text = setupMount({
      children: 'تکست ساده'
    });
    expect(Text).toHaveStyleRule('font-size', `${_theme.default.defaultSize}px`);
    expect(Text).toHaveStyleRule('color', _theme.default.defaultColor);
    Text.unmount();
  });

  it('Should render simple Text with underline', () => {
    const Text = setupMount({
      children: 'تکست زیر خط دار',
      underline: true
    });
    expect(Text).toHaveStyleRule('text-decoration', 'underline');
    Text.unmount();
  });

  it('Should render simple Text with line-through', () => {
    const Text = setupMount({
      children: 'تکست رو خط دار',
      lineThrough: true
    });
    expect(Text).toHaveStyleRule('text-decoration', 'line-through');
    Text.unmount();
  });

  it('Should render simple Text without any text-decoration style', () => {
    const Text = setupMount({
      children: 'تکست غیر معقول',
      lineThrough: true,
      underline: true
    });
    expect(Text).not.toHaveStyleRule('text-decoration');
    Text.unmount();
  });

  it('Should render emphasized Text without any text-decoration style', () => {
    const Text = setupMount({
      children: 'تکست غیر معقول',
      emphasized: true,
      lineThrough: true,
      underline: true
    });
    expect(Text).not.toHaveStyleRule('text-decoration');
    Text.unmount();
  });

  it('Should render emphasized Text as label', () => {
    const Text = setupMount({
      children: 'تکست لیبل کج',
      emphasized: true,
      label: true
    });
    expect(Text).toHaveStyleRule('background-color', _theme.default.colors.gray400);
    expect(Text).toHaveStyleRule('border-radius', '2px');
    expect(Text).toHaveStyleRule('padding', '2px 8px');
    Text.unmount();
  });

  it('Should render emphasized Text as marked', () => {
    const Text = setupMount({
      children: 'تکست مارک شده کج',
      emphasized: true,
      marked: true
    });
    expect(Text).toHaveStyleRule('background-color', _theme.default.colors.blue200);
    Text.unmount();
  });

  it('Should render simple marked text', () => {
    const Text = setupMount({
      children: 'مارک',
      marked: true
    });
    expect(Text).toHaveStyleRule('background-color', _theme.default.colors.blue200);
    Text.unmount();
  });

  it('Should render simple label text', () => {
    const Text = setupMount({
      children: 'لیبیل',
      label: true
    });
    expect(Text).toHaveStyleRule('background-color', _theme.default.colors.gray400);
    expect(Text).toHaveStyleRule('border-radius', '2px');
    expect(Text).toHaveStyleRule('padding', '2px 8px');
    Text.unmount();
  });

  it('Should render simple text when label and marked props are both true', () => {
    const Text = setupMount({
      children: 'لیبیل',
      label: true,
      marked: true
    });
    expect(Text).not.toHaveStyleRule('background-color');
    expect(Text).not.toHaveStyleRule('border-radius');
    expect(Text).not.toHaveStyleRule('padding');
    Text.unmount();
  });

  it('Should render blue supScript text', () => {
    const Text = setupMount({
      children: 'تکست بالا‌نویس',
      supScript: true,
      color: 'blue'
    });
    expect(Text).toHaveStyleRule('color', _theme.default.colors.blue600);
    Text.unmount();
  });

  it('Should render blue subScript text', () => {
    const Text = setupMount({
      children: 'تکست پایین نویس',
      subScript: true,
      color: 'blue'
    });
    expect(Text).toHaveStyleRule('color', _theme.default.colors.blue600);
    Text.unmount();
  });
});