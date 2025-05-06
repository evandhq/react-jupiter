"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _globalStyle = _interopRequireWildcard(require("./globalStyle"));
var _header = _interopRequireDefault(require("./components/header"));
var _sideNavigation = _interopRequireDefault(require("./components/side-navigation"));
var _home = _interopRequireDefault(require("./containers/home"));
var _button = _interopRequireDefault(require("./containers/button"));
var _avatar = _interopRequireDefault(require("./containers/avatar"));
var _icon = _interopRequireDefault(require("./containers/icon"));
var _typography = _interopRequireDefault(require("./containers/typography"));
var _icons = _interopRequireDefault(require("./containers/icons"));
var _card = _interopRequireDefault(require("./containers/card"));
var _cover = _interopRequireDefault(require("./containers/cover"));
var _product = _interopRequireDefault(require("./containers/product"));
var _form = _interopRequireDefault(require("./containers/form"));function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Container = _styledComponents.default.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = _styledComponents.default.main`
  position: relative;
`;

function App() {
  return (/*#__PURE__*/
    _react.default.createElement(Container, null, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_header.default, null), /*#__PURE__*/
    _react.default.createElement(Content, null, /*#__PURE__*/
    _react.default.createElement(_sideNavigation.default, null), /*#__PURE__*/
    _react.default.createElement(_globalStyle.ContentContainer, null, /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _home.default }), /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { path: "/components/typography", component: _typography.default }), /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { path: "/components/avatar", component: _avatar.default }), /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { path: "/components/icon", component: _icon.default }), /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { path: "/components/button", component: _button.default }), /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { path: "/components/icons", component: _icons.default }), /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { path: "/components/card", component: _card.default }), /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { path: "/components/cover", component: _cover.default }), /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { path: "/components/product", component: _product.default }), /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Route, { path: "/components/form", component: _form.default })
    )
    )
    ));

}var _default = exports.default =

App;