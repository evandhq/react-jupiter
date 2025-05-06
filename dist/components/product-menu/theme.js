"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const theme = {
  borderColor: _themes.default.colors.gray600,
  bgColor: _themes.default.colors.white,
  itemMinWidth: '120px',
  animation: _themes.default.animation,
  shadow: _themes.default.shadows[1],
  breakpoints: _themes.default.breakpoints,
  text: {
    color: '#333',
    fontWeight: 'normal'
  }
};var _default = exports.default =

theme;