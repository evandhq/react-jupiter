"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
require("jest-styled-components");

var _test = _interopRequireDefault(require("../utils/test"));
var _index = _interopRequireDefault(require("./index"));
var _theme = _interopRequireDefault(require("./theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ name: props.icon }, props))));};


const setupMount = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ name: props.icon }, props))));};


describe('Icons Tests', () => {
  it('should not render component when name prop is undefined', () => {
    const component = setupShallow();
    const Icon = (0, _test.default)(component, 'icon');
    expect(Icon.length).toBe(0);
  });

  it('should render icon component', () => {
    const component = setupShallow({ name: 'watch-later' });
    const wrapper = (0, _test.default)(component, 'icon');
    expect(wrapper.length).toBe(1);
  });

  it('should render icon component with medium size', () => {
    const component = setupMount({ name: 'watch-later' });
    const Icon = (0, _test.default)(component, 'icon');
    expect(Icon).toHaveStyleRule('font-size', `${_theme.default.size.md}px`);
  });

  it('should render icon component with large size', () => {
    const component = setupMount({ name: 'watch-later', size: 'lg' });
    const Icon = (0, _test.default)(component, 'icon');
    expect(Icon).toHaveStyleRule('font-size', `${_theme.default.size.lg}px`);
  });

  it('should render icon component with small size', () => {
    const component = setupMount({ name: 'watch-later', size: 'sm' });
    const Icon = (0, _test.default)(component, 'icon');
    expect(Icon).toHaveStyleRule('font-size', `${_theme.default.size.sm}px`);
  });

  it('should render gray icon component with small size', () => {
    const component = setupMount({ name: 'watch-later', size: 'sm', color: 'gray' });
    const Icon = (0, _test.default)(component, 'icon');
    expect(Icon).toHaveStyleRule('font-size', `${_theme.default.size.sm}px`);
    expect(Icon).toHaveStyleRule('color', `${_theme.default.colors.gray800}`);
  });

  it('should render sticky left and sticky right icon', () => {
    const component = setupMount({ name: 'watch-later', stickyLeft: true, stickyRight: true });
    const Icon = (0, _test.default)(component, 'icon');
    expect(Icon).toHaveStyleRule('margin', '0 0px 0 0px');
  });

  it('should render sticky right icon', () => {
    const component = setupMount({ name: 'watch-later', stickyRight: true });
    const Icon = (0, _test.default)(component, 'icon');
    expect(Icon).toHaveStyleRule('margin', `0 0px 0 ${_theme.default.marginSize.md}px`);
  });
});