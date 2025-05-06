"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const StyledTextarea = _styledComponents.default.textarea`
  font-family: 'IranSharp';
  font-size: 14px;

  resize: ${(_ref) => {let { resize } = _ref;return resize;}};
  min-height: ${(_ref2) => {let { minHeight } = _ref2;return `${minHeight}px`;}};
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  
  border-radius: ${(_ref3) => {let { theme } = _ref3;return `${theme.borderRadius}px`;}};
  border: 1px solid ${(_ref4) => {let { disabled, theme } = _ref4;return disabled ? theme.disabled.color : theme.borderColor.normal;}};
  background: ${(_ref5) => {let { disabled, theme } = _ref5;return disabled ? theme.disabled.background : 'white';}};

  &:hover {
    border-color: ${(_ref6) => {let { disabled, theme } = _ref6;return disabled ? theme.disabled.color : theme.borderColor.hover;}};
  }
  &:focus {
    border-color: ${(_ref7) => {let { theme } = _ref7;return theme.borderColor.focus;}};
  }
`;var _default = exports.default =

StyledTextarea;