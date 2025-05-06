"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Image = _styledComponents.default.img`
  font-family: 'IranSharp';
  width: ${(_ref) => {let { theme, size } = _ref;return `${theme.size[size]}px`;}};
  height: ${(_ref2) => {let { theme, size } = _ref2;return `${theme.size[size]}px`;}};
  @media only screen and (max-width: ${_themes.default.breakpoints.sm}px) {
    width: ${(_ref3) => {let { theme, sizeMobile } = _ref3;return `${theme.size[sizeMobile]}px`;}};
    height: ${(_ref4) => {let { theme, sizeMobile } = _ref4;return `${theme.size[sizeMobile]}px`;}};
  }
  border-radius: ${(_ref5) => {let { theme, round } = _ref5;return round ? '50%' : `${theme.borderRadius}px`;}};
  display: block;
  background-size: cover;
`;var _default = exports.default =

Image;