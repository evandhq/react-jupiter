"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.ListItem = exports.ListContainer = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const ListContainer = exports.ListContainer = _styledComponents.default.ul`
  display: flex;
  flex-direction: ${(_ref) => {let { isHorizontal } = _ref;return isHorizontal ? 'row' : 'column';}};
  flex-wrap: wrap;
`;

const ListItem = exports.ListItem = _styledComponents.default.li`
    margin: 2px 0;
    min-width: calc(100% / ${(_ref2) => {let { propsLength } = _ref2;return propsLength;}});
    &:first-child { margin-top: 0; }
    &:last-child { margin-bottom: 0; }
`;