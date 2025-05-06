"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Margin = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _core = require("../core");

var _themes = _interopRequireDefault(require("../../themes"));function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Margin = exports.Margin = _styledComponents.default.div`
  ${(_ref) => {let { inline } = _ref;return inline && 'display: inline-block;';}}
  ${(_ref2) => {let { all, theme } = _ref2;return (0, _core._m)(all, theme);}}
  ${(_ref3) => {let { horizontal, theme } = _ref3;return (0, _core._mx)(horizontal, theme);}} 
  ${(_ref4) => {let { vertical, theme } = _ref4;return (0, _core._my)(vertical, theme);}} 
  ${(_ref5) => {let { top, theme } = _ref5;return (0, _core._mt)(top, theme);}} 
  ${(_ref6) => {let { right, theme } = _ref6;return (0, _core._mr)(right, theme);}} 
  ${(_ref7) => {let { bottom, theme } = _ref7;return (0, _core._mb)(bottom, theme);}} 
  ${(_ref8) => {let { left, theme } = _ref8;return (0, _core._ml)(left, theme);}} 
`;

Margin.displayName = 'Margin';

const Margined = (props) => /*#__PURE__*/
_react.default.createElement(_styledComponents.ThemeProvider, { theme: _themes.default }, /*#__PURE__*/
_react.default.createElement(Margin, props)
);var _default = exports.default =


Margined;