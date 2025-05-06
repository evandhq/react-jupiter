"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const ExternalLink = _styledComponents.default.a`
  text-decoration: none;
  color: ${(_ref) => {let { theme } = _ref;return theme.colors.blue600;}};
`;var _default = exports.default =

ExternalLink;