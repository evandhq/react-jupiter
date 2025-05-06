"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.SupScript = exports.SubScript = exports.Strong = exports.String = exports.Emphasized = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _theme = require("../../utils/theme");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Emphasized = exports.Emphasized = _styledComponents.default.em`
  font-family: 'IranSharp';
  font-size: ${(_ref) => {let { size } = _ref;return `${size}px`;}};
  ${(_ref2) => {let { underline } = _ref2;return underline ? 'text-decoration: underline;' : '';}}
  ${(_ref3) => {let { lineThrough } = _ref3;return lineThrough ? 'text-decoration: line-through;' : '';}}
  color: ${(_ref4) => {let { theme, color } = _ref4;return (0, _theme.getColorFromName)(theme, color);}};
  ${(_ref5) => {let { bold } = _ref5;return bold ? 'font-weight: bold;' : '';}}
  ${(_ref6) => {let { theme, marked } = _ref6;return marked ? `background-color: ${theme.colors.blue200};` : '';}}
  ${(_ref7) => {let { theme, isLabel } = _ref7;return isLabel ?
  `background-color: ${theme.colors.gray400}; padding: 2px 8px; border-radius: 2px;` :
  '';}}
`;


const Strong = exports.Strong = _styledComponents.default.strong`
  font-family: 'IranSharp';
  font-size: ${(_ref8) => {let { size } = _ref8;return `${size}px`;}};
  font-weight: bold;
  ${(_ref9) => {let { underline } = _ref9;return underline ? 'text-decoration: underline;' : '';}}
  ${(_ref10) => {let { lineThrough } = _ref10;return lineThrough ? 'text-decoration: line-through;' : '';}}
  ${(_ref11) => {let { emphasized } = _ref11;return emphasized ? 'font-style: italic;' : '';}}
  color: ${(_ref12) => {let { theme, color } = _ref12;return (0, _theme.getColorFromName)(theme, color);}};
  ${(_ref13) => {let { theme, marked } = _ref13;return marked ? `background-color: ${theme.colors.blue200};` : '';}}
  ${(_ref14) => {let { theme, isLabel } = _ref14;return isLabel ?
  `background-color: ${theme.colors.gray400}; padding: 2px 8px; border-radius: 2px;` :
  '';}}
`;


const String = exports.String = _styledComponents.default.span`
  font-family: 'IranSharp';
  font-size: ${(_ref15) => {let { spanSize } = _ref15;return `${spanSize}px`;}};
  ${(_ref16) => {let { underline } = _ref16;return underline ? 'text-decoration: underline;' : '';}}
  ${(_ref17) => {let { lineThrough } = _ref17;return lineThrough ? 'text-decoration: line-through;' : '';}}
  color: ${(_ref18) => {let { theme, spanColor } = _ref18;return (0, _theme.getColorFromName)(theme, spanColor);}};
  font-weight: ${(_ref19) => {let { bold, fontWeight } = _ref19;return bold ? 'bold' : fontWeight;}};
  ${(_ref20) => {let { theme, marked } = _ref20;return marked ? `background-color: ${theme.colors.blue200};` : '';}}
  ${(_ref21) => {let { theme, isLabel } = _ref21;return isLabel ?
  `background-color: ${theme.colors.gray400}; padding: 2px 8px; border-radius: 2px;` :
  '';}}
  ${
(_ref22) => {let { isDisplayBlock } = _ref22;return isDisplayBlock ? 'display: block;' : '';}}
  ${(_ref23) => {let { isCutWithEllipsis } = _ref23;
  if (isCutWithEllipsis) {
    return `
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        `;
  }
  return '';
}}
  ${(_ref24) => {let { textAlign } = _ref24;return textAlign ?
  `text-align: ${textAlign}` :
  '';}}
`;


const SubScript = exports.SubScript = _styledComponents.default.sub`
  font-family: 'IranSharp';
  font-size: 8px;
  color: ${(_ref25) => {let { theme, color } = _ref25;return (0, _theme.getColorFromName)(theme, color);}};
`;

const SupScript = exports.SupScript = _styledComponents.default.sup`
  font-family: 'IranSharp';
  font-size: 8px;
  color: ${(_ref26) => {let { theme, color } = _ref26;return (0, _theme.getColorFromName)(theme, color);}};
`;