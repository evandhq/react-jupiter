"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const TemplateContainer = _styledComponents.default.section`
  display: flex;
  flex-direction: ${(_ref) => {let { direction } = _ref;return direction === 'vertical' ? 'column' : 'row';}};
  border-radius: ${(_ref2) => {let { theme } = _ref2;return `${theme.borderRadius.low}px`;}};
  overflow: hidden;
  ${(_ref3) => {let { maxWidth } = _ref3;return maxWidth ? `max-width: ${maxWidth}px` : '';}};
  box-shadow: ${(_ref4) => {let { theme, level } = _ref4;return (
    `0 0 ${theme.shadows[level].blur}px ${theme.shadows[level].spread}px rgba(0, 0, 0, ${theme.shadows[level].opacity})`);}};
  text-decoration: none;
  transition: ${
(_ref5) => {let { theme } = _ref5;return `all ${theme.animation.time}s ${theme.animation.method}`;}};
  ${(_ref6) => {let { background } = _ref6;return background ? `background: url(${background}) bottom left / 142px no-repeat` : '';}};

  &:hover {
    ${(_ref7) => {let { theme, level, hoverToLevel } = _ref7;return (
    hoverToLevel > level ?
    `box-shadow: 0 0 ${theme.shadows[hoverToLevel].blur}px ${theme.shadows[hoverToLevel].spread}px rgba(0, 0, 0, ${theme.shadows[hoverToLevel].opacity})` :
    '');}};
  }
`;var _default = exports.default =


TemplateContainer;