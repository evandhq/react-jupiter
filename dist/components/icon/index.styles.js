"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _theme = require("../utils/theme");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const StyledIcon = _styledComponents.default.i`
  font-size: ${(_ref) => {let { theme, size } = _ref;return `${theme.size[size]}px`;}};
  color: ${(_ref2) => {let { theme, IconColor } = _ref2;return (0, _theme.getColorFromName)(theme, IconColor);}};
  margin: ${(_ref3) => {let {
    theme, size, stickyLeft, stickyRight, marginRight, marginLeft
  } = _ref3;return `0 ${marginRight || (stickyRight ? 0 : theme.marginSize[size])}px 0 ${marginLeft || (stickyLeft ? 0 : theme.marginSize[size])}px`;}};
`;var _default = exports.default =

StyledIcon;