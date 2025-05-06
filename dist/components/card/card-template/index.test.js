"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
require("jest-styled-components");

var _index = _interopRequireDefault(require("./index"));
var _typography = require("../../typography");
var _test = _interopRequireDefault(require("../../utils/test"));
var _themes = _interopRequireDefault(require("../../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.shallow)(/*#__PURE__*/
      _react.default.createElement(_index.default, _extends({
        level: props.level,
        hoverToLevel: props.hoverToLevel,
        maxWidth: props.maxWidth,
        linkTo: props.linkTo },
      props),

      props.children
      )
    ));};


const setupMount = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.mount)(/*#__PURE__*/
      _react.default.createElement(_index.default, _extends({
        level: props.level,
        hoverToLevel: props.hoverToLevel,
        maxWidth: props.maxWidth,
        linkTo: props.linkTo },
      props),

      props.children
      )
    ));};


describe('Card Template', () => {
  it('should render correctly', () => {
    const component = setupShallow({
      level: 2,
      hoverToLevel: 3,
      children: /*#__PURE__*/_react.default.createElement(_typography.Text, null, "\u06CC\u06A9 \u0645\u062A\u0646 \u062A\u0633\u062A\u06CC")
    });
    const CardTemplate = (0, _test.default)(component, 'card-template');
    expect(CardTemplate.length).toBe(1);
  });

  it('should render correctly with link wrapper', () => {
    const component = setupShallow({
      level: 2,
      hoverToLevel: 3,
      linkTo: '/link-address',
      children: /*#__PURE__*/_react.default.createElement(_typography.Text, null, "\u06CC\u06A9 \u0645\u062A\u0646 \u062A\u0633\u062A\u06CC")
    });
    const CardTemplate = (0, _test.default)(component, 'card-template-link-wrapper');
    expect(CardTemplate.length).toBe(1);
  });

  it('should has correct style', () => {
    const props = {
      level: 1,
      hoverToLevel: 3,
      children: 'یک متن تستی',
      maxWidth: 300
    };
    const CardTemplate = setupMount(props);
    expect(CardTemplate).toHaveStyleRule(
      'box-shadow',
      `0 0 ${_themes.default.shadows[1].blur}px ${_themes.default.shadows[1].spread}px rgba(0,0,0,${_themes.default.shadows[1].opacity})`
    );
    expect(CardTemplate).toHaveStyleRule(
      'box-shadow',
      `0 0 ${_themes.default.shadows[3].blur}px ${_themes.default.shadows[3].spread}px rgba(0,0,0,${_themes.default.shadows[3].opacity})`,
      {
        modifier: ':hover'
      }
    );
    expect(CardTemplate).toHaveStyleRule(
      'border-radius',
      `${_themes.default.borderRadius.low}px`
    );
    expect(CardTemplate).toHaveStyleRule('max-width', `${props.maxWidth}px`);
  });
});