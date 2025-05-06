"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const theme = {
  defaultColor: _themes.default.colors.blue400,
  secoundColor: _themes.default.colors.blue600,
  borderRadius: _themes.default.borderRadius.high,
  transition: `all ${_themes.default.animation.time}s ${_themes.default.animation.method}`
};var _default = exports.default =

theme;