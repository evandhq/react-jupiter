"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Nav = exports.MenuWrapper = exports.MenuListItem = exports.ExtraMenuWrapper = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const MenuWrapper = exports.MenuWrapper = _styledComponents.default.ol`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ${(_ref) => {let { justifyContent } = _ref;return justifyContent ? justifyContent : 'space-between';}};

  li {
    cursor: pointer;
  }
`;

const MenuListItem = exports.MenuListItem = _styledComponents.default.li`
  flex-shrink: 1;
  min-width: ${(_ref2) => {let { theme } = _ref2;return theme.itemMinWidth;}};
  box-sizing: border-box;
  ${(_ref3) => {let { isShowMoreItem } = _ref3;return isShowMoreItem ? 'position: relative;' : '';}}
`;


const ExtraMenuWrapper = exports.ExtraMenuWrapper = _styledComponents.default.ol`
  opacity: ${(_ref4) => {let { showMore } = _ref4;return showMore ? '1' : '0';}};
  transition: opacity ${(_ref5) => {let { theme } = _ref5;return `${theme.animation.time}s ${theme.animation.method}`;}};
  position: absolute;
  background: ${(_ref6) => {let { theme } = _ref6;return theme.bgColor;}};
  box-shadow:
    ${(_ref7) => {let { theme } = _ref7;return `0 0 ${theme.shadow.blur}px ${theme.shadow.spread}px rgba(0, 0, 0, ${theme.shadow.opacity});`;}}

  li {
    border-bottom: 1px solid ${(_ref8) => {let { theme } = _ref8;return theme.borderColor;}};
    min-width: ${(_ref9) => {let { theme } = _ref9;return theme.itemMinWidth;}};
  }
`;

const Nav = exports.Nav = _styledComponents.default.nav`
  border-bottom: 1px solid ${(_ref10) => {let { theme } = _ref10;return theme.borderColor;}};
`;