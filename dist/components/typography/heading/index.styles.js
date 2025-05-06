"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../utils");
var _theme = require("../../utils/theme");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const H1 = exports.H1 = _styledComponents.default.h1`
  font-family: 'IranSharp';
  margin: ${(_ref) => {let { theme, size } = _ref;return (0, _utils.getMarginOfHeading)(theme, size, 1);}}
  font-size: ${(_ref2) => {let { theme, size } = _ref2;return `${(0, _utils.getSizeOfHeading)(theme, size, 1)}px;`;}}
  line-height: ${(_ref3) => {let { theme, size } = _ref3;return `
    ${(0, _utils.getSizeOfHeading)(theme, size, 1) * theme.lineHeightRatio}px;
  `;}}
  color: ${(_ref4) => {let { theme, color } = _ref4;return (0, _theme.getColorFromName)(theme, color);}};
  font-weight: bold;
`;

const H2 = exports.H2 = _styledComponents.default.h2`
  font-family: 'IranSharp';
  margin: ${(_ref5) => {let { theme, size } = _ref5;return (0, _utils.getMarginOfHeading)(theme, size, 2);}};
  font-size: ${(_ref6) => {let { theme, size } = _ref6;return `${(0, _utils.getSizeOfHeading)(theme, size, 2)}`;}}px;
  line-height: ${(_ref7) => {let { theme, size } = _ref7;return `
    ${(0, _utils.getSizeOfHeading)(theme, size, 2) * theme.lineHeightRatio}px;
  `;}}
  color: ${(_ref8) => {let { theme, color } = _ref8;return (0, _theme.getColorFromName)(theme, color);}};
  font-weight: bold;
`;

const H3 = exports.H3 = _styledComponents.default.h3`
  font-family: 'IranSharp';
  margin: ${(_ref9) => {let { theme, size } = _ref9;return (0, _utils.getMarginOfHeading)(theme, size, 3);}}
  font-size: ${(_ref10) => {let { theme, size } = _ref10;return `${(0, _utils.getSizeOfHeading)(theme, size, 3)}px;`;}}
  line-height: ${(_ref11) => {let { theme, size } = _ref11;return `
    ${(0, _utils.getSizeOfHeading)(theme, size, 3) * theme.lineHeightRatio}px;
  `;}}
  color: ${(_ref12) => {let { theme, color } = _ref12;return (0, _theme.getColorFromName)(theme, color);}};
  font-weight: bold;
`;

const H4 = exports.H4 = _styledComponents.default.h4`
  font-family: 'IranSharp';
  margin: ${(_ref13) => {let { theme, size } = _ref13;return (0, _utils.getMarginOfHeading)(theme, size, 4);}}
  font-size: ${(_ref14) => {let { theme, size } = _ref14;return `${(0, _utils.getSizeOfHeading)(theme, size, 4)}px;`;}}
  line-height: ${(_ref15) => {let { theme, size } = _ref15;return `
    ${(0, _utils.getSizeOfHeading)(theme, size, 4) * theme.lineHeightRatio}px;
  `;}}
  color: ${(_ref16) => {let { theme, color } = _ref16;return (0, _theme.getColorFromName)(theme, color);}};
  font-weight: bold;
`;

const H5 = exports.H5 = _styledComponents.default.h5`
  font-family: 'IranSharp';
  margin: ${(_ref17) => {let { theme, size } = _ref17;return (0, _utils.getMarginOfHeading)(theme, size, 5);}}
  font-size: ${(_ref18) => {let { theme, size } = _ref18;return `${(0, _utils.getSizeOfHeading)(theme, size, 5)}px;`;}}
  line-height: ${(_ref19) => {let { theme, size } = _ref19;return `
    ${(0, _utils.getSizeOfHeading)(theme, size, 5) * theme.lineHeightRatio}px;
  `;}}
  color: ${(_ref20) => {let { theme, color } = _ref20;return (0, _theme.getColorFromName)(theme, color);}};
  font-weight: bold;
`;

const H6 = exports.H6 = _styledComponents.default.h6`
  font-family: 'IranSharp';
  margin: ${(_ref21) => {let { theme, size } = _ref21;return (0, _utils.getMarginOfHeading)(theme, size, 6);}}
  font-size: ${(_ref22) => {let { theme, size } = _ref22;return `${(0, _utils.getSizeOfHeading)(theme, size, 6)}px;`;}}
  line-height: ${(_ref23) => {let { theme, size } = _ref23;return `
    ${(0, _utils.getSizeOfHeading)(theme, size, 6) * theme.lineHeightRatio}px;
  `;}}
  color: ${(_ref24) => {let { theme, color } = _ref24;return (0, _theme.getColorFromName)(theme, color);}};
  font-weight: bold;
`;