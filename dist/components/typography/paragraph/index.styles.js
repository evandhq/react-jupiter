"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Content = _styledComponents.default.p`
  margin: 8px 0;
  font-family: 'IranSharp';
  font-size: ${(_ref) => {let { size } = _ref;return `${size}px`;}};
  line-height: ${(_ref2) => {let { theme, size } = _ref2;return `${size * theme.lineHeightRatio}px`;}};
  color: ${(_ref3) => {let { theme, color } = _ref3;return theme.colors[color];}};
  font-weight: ${(_ref4) => {let { bold } = _ref4;return bold ? 'bold' : 'normal';}};
`;var _default = exports.default =

Content;