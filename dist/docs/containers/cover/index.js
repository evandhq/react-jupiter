"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _components = require("../../../components");
var _coverSample = _interopRequireDefault(require("../../assets/cover-sample.png"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const { Heading } = _components.Typography;

const CoverPage = () => /*#__PURE__*/
_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 1 }, "\u06A9\u0627\u0648\u0631"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u06A9\u0627\u0648\u0631 \u0633\u0627\u062F\u0647 \u0628\u062F\u0648\u0646 \u0622\u062F\u0631\u0633 \u0639\u06A9\u0633 \u06A9\u0627\u0648\u0631"

), /*#__PURE__*/
_react.default.createElement(_components.Cover, null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u06A9\u0627\u0648\u0631 \u0633\u0627\u062F\u0647 \u0628\u0627 \u0622\u062F\u0631\u0633 \u062F\u0647\u06CC \u0627\u0634\u062A\u0628\u0627\u0647"

), /*#__PURE__*/
_react.default.createElement(_components.Cover, { src: "wrong-src" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u06A9\u0627\u0648\u0631 \u0633\u0627\u062F\u0647"

), /*#__PURE__*/
_react.default.createElement(_components.Cover, { src: _coverSample.default }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u06A9\u0627\u0648\u0631 \u0628\u0627 \u0644\u06CC\u0646\u06A9 \u0628\u06CC\u0631\u0648\u0646\u06CC"

), /*#__PURE__*/
_react.default.createElement(_components.Cover, { linkTo: "http://yahoo.com" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u06A9\u0627\u0648\u0631 \u0628\u0627 \u0644\u06CC\u0646\u06A9 \u062F\u0631\u0648\u0646\u06CC"

), /*#__PURE__*/
_react.default.createElement(_components.Cover, {
  renderLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/components/card" }, element) }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u06A9\u0627\u0648\u0631 lazy-load"

), /*#__PURE__*/
_react.default.createElement(_components.Cover, {
  src: "https://images.unsplash.com/photo-1563271963-9ff697463684?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  isLazy: true }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_components.Cover, { isLazy: true, src: "https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_components.Cover, {
  isLazy: true,
  src: "https://images.unsplash.com/photo-1566650141466-788ec481d69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
  renderLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/components/card" }, element) }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_components.Cover, {
  isLazy: true,
  src: "https://images.unsplash.com/photo-1543572414-f353d97a5212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  linkTo: "http://yahoo.com" }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_components.Cover, { isLazy: true, src: "wrong-lazy-src", minHeight: 151 }), /*#__PURE__*/
_react.default.createElement("br", null)

);var _default = exports.default =


CoverPage;