"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.StyledIcon = exports.InternalLink = exports.ExternalLink = exports.BaseButton = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _icon = _interopRequireDefault(require("../icon"));
var _theme = require("../utils/theme");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const BaseButton = exports.BaseButton = _styledComponents.default.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(_ref) => {let { width, wide } = _ref;return width ? `${width}` : wide ? '100%' : 'auto';}};
  height: ${(_ref2) => {let { height } = _ref2;return height ? `${height}` : 'auto';}};
  min-width: ${(_ref3) => {let { size, theme, width } = _ref3;return width ? `${width}` : `${theme.size[size].minWidth}px`;}};
  min-height: ${(_ref4) => {let { size, theme, height } = _ref4;return height ? `${height}` : `${theme.size[size].height}px`;}};

  padding: ${(_ref5) => {let { size, theme } = _ref5;return theme.size[size].padding;}};
  box-sizing: border-box;

  cursor: ${(_ref6) => {let { disabled } = _ref6;return disabled ? 'not-allowed' : 'pointer';}};
  opacity: ${(_ref7) => {let { disabled } = _ref7;return disabled ? '0.25' : '1';}};
  border-radius: ${(_ref8) => {let { theme } = _ref8;return `${theme.borderRadius}px`;}};

  margin: ${(_ref9) => {let {
    marginRight, marginLeft
  } = _ref9;return `0 ${marginRight || 0}px 0 ${marginLeft || 0}px`;}};

  &[data-styletype="primary"] {
    border: none;
    background: ${(_ref10) => {let { theme, mainColor } = _ref10;return (0, _theme.getColorFromName)(theme, mainColor);}};
    
    &:hover { 
      transition: all 0.25s;
      background: ${(_ref11) => {let { theme, mainColor, disabled } = _ref11;return !disabled ? (0, _theme.getHoverColorFromName)(theme, mainColor) : (0, _theme.getColorFromName)(theme, mainColor);}};
    }
    &:active {
      transition: all 0.25s;
      background: ${(_ref12) => {let { theme, mainColor, disabled } = _ref12;return !disabled ? (0, _theme.getFocusColorFromName)(theme, mainColor) : (0, _theme.getColorFromName)(theme, mainColor);}};
    }
  }
  
  &[data-styletype="secondary"] {
    border: 1px solid ${(_ref13) => {let { theme, mainColor } = _ref13;return (0, _theme.getColorFromName)(theme, mainColor);}};
    background: transparent;

    &:hover { 
      border-color: ${(_ref14) => {let { theme, disabled, mainColor } = _ref14;return !disabled ? 'transparent' : (0, _theme.getColorFromName)(theme, mainColor);}};
      transition: all 0.25s;
      background: ${(_ref15) => {let { theme, mainColor, disabled } = _ref15;return !disabled ? (0, _theme.getColorFromName)(theme, mainColor) : 'transparent';}};
      * {
        transition: all 0.25s;
        color: ${(_ref16) => {let { theme, mainColor, disabled } = _ref16;return !disabled ? theme.colors.white : (0, _theme.getColorFromName)(theme, mainColor);}};
      }
    }
    &:active {
      border-color: ${(_ref17) => {let { theme, disabled, mainColor } = _ref17;return !disabled ? 'transparent' : (0, _theme.getColorFromName)(theme, mainColor);}};
      background: ${(_ref18) => {let { theme, mainColor, disabled } = _ref18;return !disabled ? (0, _theme.getFocusColorFromName)(theme, mainColor) : 'transparent';}};
      * {
        transition: all 0.25s;
        color: ${(_ref19) => {let { theme, mainColor, disabled } = _ref19;return !disabled ? theme.colors.white : (0, _theme.getColorFromName)(theme, mainColor);}};
      }
    }
  }

  &[data-styletype="tertiary"] {
    border: none;
    background: transparent;

    &:hover { 
      * {
        transition: all 0.25s;
        color: ${(_ref20) => {let { theme } = _ref20;return theme.colors.darkBlue400;}};
      }
    }
    &:active {
      * {
        transition: all 0.25s;
        color: ${(_ref21) => {let { theme } = _ref21;return theme.colors.darkBlue800;}};
      }
    }

  }
`;

const StyledIcon = exports.StyledIcon = (0, _styledComponents.default)(_icon.default)`
  margin-right: 0;
`;

const ExternalLink = exports.ExternalLink = _styledComponents.default.a`
  color: ${(_ref22) => {let { theme, color } = _ref22;return (0, _theme.getColorFromName)(theme, color);}};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
  &:visited {
    color: ${(_ref23) => {let { theme, color } = _ref23;return (0, _theme.getColorFromName)(theme, color);}};
    text-decoration: none;
  }
`;

const InternalLink = exports.InternalLink = _styledComponents.default.div`
  a {
    color: ${(_ref24) => {let { theme, color } = _ref24;return (0, _theme.getColorFromName)(theme, color);}};
    text-decoration: none;
  }
`;