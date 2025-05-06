"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../globalStyle"));
var _index = _interopRequireDefault(require("./index.styles"));
var _theme = _interopRequireDefault(require("./theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const defaultImageUrl = 'https://static.evand.net/assets/images/defaults/avatar.svg';

const Avatar = (_ref) => {let {
    alt = 'آواتار',
    size = 'md',
    sizeMobile = 'md',
    src = defaultImageUrl,
    round = false,
    ...rest
  } = _ref;return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_index.default, _extends({
      src: src,
      alt: alt,
      size: size,
      sizeMobile: sizeMobile,
      "data-test": "avatar",
      round: round,
      onError: (e) => (e.target.onerror = null, e.target.src = defaultImageUrl) },
    rest)
    )
    ));};


Avatar.propTypes = {
  src: _propTypes.default.string,
  alt: _propTypes.default.string,
  round: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['lg', 'md', 'sm', 'xs']),
  sizeMobile: _propTypes.default.oneOf(['lg', 'md', 'sm'])
};var _default = exports.default =

Avatar;