"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../globalStyle"));
var _index = require("./index.style");
var _productProperty = _interopRequireDefault(require("./product-property"));
var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}
















const ProductProperties = (props) => {
  const {
    list,
    isHorizontal = false,
    color = 'black',
    iconColor = 'gray',
    link,
    ...rest
  } = props;
  const propsLength = list.length > 1 && isHorizontal ? list.length : 1;

  if (list.length === 1) {
    return (/*#__PURE__*/
      _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
      _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
      _react.default.createElement(_productProperty.default, _extends({ iconName: list[0].iconName, text: list[0].text }, rest))
      ));

  }

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _themes.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_index.ListContainer, _extends({ isHorizontal: isHorizontal }, rest),
    list.map((_ref, index) => {let { iconName, text, link } = _ref;return (/*#__PURE__*/
        _react.default.createElement(_index.ListItem, { key: `${iconName}-${index.toString()}`, isHorizontal: isHorizontal, propsLength: propsLength }, /*#__PURE__*/
        _react.default.createElement(_productProperty.default, {
          iconName: iconName,
          text: text,
          color: color,
          iconColor: iconColor,
          link: link }
        )
        ));}
    )
    )
    ));

};var _default = exports.default =

ProductProperties;