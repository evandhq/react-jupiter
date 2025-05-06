"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const theme = {
  borderRadius: _themes.default.borderRadius.low,
  borderColor: {
    normal: _themes.default.colors.gray800,
    hover: _themes.default.colors.blue400,
    focus: _themes.default.colors.blue600
  },
  disabled: {
    background: _themes.default.colors.gray200,
    color: _themes.default.colors.gray400
  }
};var _default = exports.default =

theme;