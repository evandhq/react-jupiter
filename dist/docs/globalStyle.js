"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.ContentContainer = void 0;var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _iransharp_bold_web = _interopRequireDefault(require("./assets/fonts/iransharp_bold_web.woff"));
var _iransharp_bold_web2 = _interopRequireDefault(require("./assets/fonts/iransharp_bold_web.woff2"));
var _iransharp_regular_web = _interopRequireDefault(require("./assets/fonts/iransharp_regular_web.woff"));
var _iransharp_regular_web2 = _interopRequireDefault(require("./assets/fonts/iransharp_regular_web.woff2"));
var _icomoon = _interopRequireDefault(require("./assets/fonts/icomoon.woff"));
var _filesImgs = _interopRequireDefault(require("./assets/fonts/filesImgs.woff"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}

const GlobalStyle = (0, _styledComponents.createGlobalStyle)`
  @font-face {
    font-family: 'IranSharp';
    font-style: normal;
    font-weight: bold;
    src:
      url(${_iransharp_bold_web2.default}) format("woff2"),
      url(${_iransharp_bold_web.default}) format("woff");
  }
  @font-face {
    font-family: 'IranSharp';
    font-style: normal;
    font-weight: 300;
    src:
      url(${_iransharp_regular_web2.default}) format("woff2"),
      url(${_iransharp_regular_web.default}) format("woff");
  }
  @font-face {
    font-family: 'Jupiterico';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${_icomoon.default}) format("woff");
  }

  @font-face {
    font-family: 'JupiterfilesImgs';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${_filesImgs.default}) format("woff");
  }

  body {
    box-sizing: border-box;
    direction: rtl;
    font-size: 13px;
    height: 100%;
  }

`;var _default = exports.default =

GlobalStyle;

const ContentContainer = exports.ContentContainer = _styledComponents.default.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-right: 180px;
`;