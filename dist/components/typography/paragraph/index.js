"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _theme = _interopRequireDefault(require("../theme"));
var _index = _interopRequireDefault(require("./index.styles"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const Paragraph = (_ref) =>





{let { size = _theme.default.defaultSize, color = 'riverBedDark', bold = false, children, ...rest } = _ref;
  if (children === undefined) return null;
  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_index.default, _extends({ size: size, color: color, bold: bold, "data-test": "paragraph" }, rest),
    children
    )
    ));

};

Paragraph.propTypes = {
  children: _propTypes.default.oneOfType([
  _propTypes.default.arrayOf(_propTypes.default.node),
  _propTypes.default.node,
  _propTypes.default.string]
  ).isRequired,
  size: _propTypes.default.number,
  color: _propTypes.default.oneOf(['riverBedDark', 'riverBed']),
  bold: _propTypes.default.bool
};var _default = exports.default =

Paragraph;