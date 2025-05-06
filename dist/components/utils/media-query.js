"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledMediaQuery = require("styled-media-query");
var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const mediaQuery = (0, _styledMediaQuery.generateMedia)({
  xl: `${_themes.default.breakpoints.xl}px`,
  lg: `${_themes.default.breakpoints.lg}px`,
  md: `${_themes.default.breakpoints.md}px`,
  sm: `${_themes.default.breakpoints.sm}px`,
  xs: `${_themes.default.breakpoints.xs}px`
});var _default = exports.default =

mediaQuery;