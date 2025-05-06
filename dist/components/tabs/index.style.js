"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.TabHeader = exports.StyledButton = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const TabHeader = exports.TabHeader = _styledComponents.default.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledButton = exports.StyledButton = _styledComponents.default.button`
  min-width: 140px;
  max-width: 210px;
  height: 35px;

  margin: 4px 0 4px 8px;
  padding: 0 8px;
  box-sizing: border-box;

  background: transparent;
  border: 1px solid ${(_ref) => {let { theme } = _ref;return theme.defaultColor;}};
  border-radius: ${(_ref2) => {let { theme } = _ref2;return theme.borderRadius;}}px;
  cursor: pointer;
  transition:  ${(_ref3) => {let { theme } = _ref3;return theme.transition;}};

  span {
    color: ${(_ref4) => {let { theme } = _ref4;return theme.defaultColor;}};
    transition:  ${(_ref5) => {let { theme } = _ref5;return theme.transition;}};
  }

  &:hover, &.active {
    border-color: ${(_ref6) => {let { theme } = _ref6;return theme.secoundColor;}};

    span {
      color: ${(_ref7) => {let { theme } = _ref7;return theme.secoundColor;}};
    }
  }
`;