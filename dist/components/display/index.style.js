"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Flex = exports.DisplayStyle = exports.Block = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Flex = exports.Flex = _styledComponents.default.div`
  display: flex;
  ${(_ref) => {let { justifyContent } = _ref;return justifyContent ?
  `justify-content: ${justifyContent}` :
  '';}}
  ${
(_ref2) => {let { alignItems } = _ref2;return alignItems ?
  `align-items: ${alignItems}` :
  '';}}
`;


const Block = exports.Block = _styledComponents.default.div`
  display: block;
`;

const DisplayStyle = exports.DisplayStyle = _styledComponents.default.div`
  ${(_ref3) => {let { display } = _ref3;return display ?
  `display: ${display};` :
  '';}}
  ${
(_ref4) => {let { width } = _ref4;return width ?
  `width: ${width};` :
  '';}}
  ${
(_ref5) => {let { widthMobile } = _ref5;return widthMobile ?
  `@media only screen and (max-width: ${_themes.default.breakpoints.sm}px) {
        width: ${widthMobile};
      }` :
  '';}}
  ${
(_ref6) => {let { justifyContent } = _ref6;return justifyContent ?
  `justify-content: ${justifyContent};` :
  '';}}

  ${
(_ref7) => {let { justifyContentMobile } = _ref7;return justifyContentMobile ?
  `@media only screen and (max-width: ${_themes.default.breakpoints.sm}px) {
        justify-content: ${justifyContentMobile};
      }` :
  '';}}

  ${
(_ref8) => {let { alignItems } = _ref8;return alignItems ?
  `align-items: ${alignItems};` :
  '';}}
  ${
(_ref9) => {let { alignItemsMobile } = _ref9;return alignItemsMobile ?
  `@media only screen and (max-width: ${_themes.default.breakpoints.sm}px) {
        align-items: ${alignItemsMobile};
      }` :
  '';}}
  ${
(_ref10) => {let { flexDirection } = _ref10;return flexDirection ?
  `flex-direction: ${flexDirection};` :
  '';}}

  ${
(_ref11) => {let { flexDirectionMobile } = _ref11;return flexDirectionMobile ?
  `@media only screen and (max-width: ${_themes.default.breakpoints.sm}px) {
        flex-direction: ${flexDirectionMobile};
      }` :
  '';}}
  ${
(_ref12) => {let { wrap } = _ref12;return wrap ?
  'flex-wrap: wrap;' :
  '';}}
  ${
(_ref13) => {let { flex } = _ref13;return flex ?
  `flex: ${flex};` :
  '';}}
  ${
(_ref14) => {let { alignSelf } = _ref14;return alignSelf ?
  `align-self: ${alignSelf};` :
  '';}}
`;