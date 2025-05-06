"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.PasswordIcon = exports.Input = exports.DescriptionContainer = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _typography = require("../../typography");
var _icon = _interopRequireDefault(require("../../icon"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Input = exports.Input = _styledComponents.default.input`
  font-family: 'IranSharp';
  font-weight: normal;
  font-size: 12px;
  border-radius: ${(_ref) => {let { theme } = _ref;return `${theme.borderRadius}px`;}};
  border: solid 1px ${(_ref2) => {let { theme } = _ref2;return theme.borderColor.normal;}};
  padding: 6px;
  box-sizing: border-box;
  width: 100%;
  direction: ${(_ref3) => {let { rtl } = _ref3;return rtl ? 'rtl' : 'ltr';}};

  &[disabled=""]{
    background-color: ${(_ref4) => {let { theme } = _ref4;return theme.disabled.background;}};
    color: ${(_ref5) => {let { theme } = _ref5;return theme.disabled.color;}};
    border-color: transparent;


    &:hover {
      border-color: transparent;
    }
  }

  &:hover {
    border-color: ${(_ref6) => {let { theme } = _ref6;return theme.borderColor.hover;}};
  }

  &:focus {
    border-color: ${(_ref7) => {let { theme } = _ref7;return theme.borderColor.focus;}};
  }
`;

const DescriptionContainer = exports.DescriptionContainer = (0, _styledComponents.default)(_typography.Text)`
  display: block;
  margin-bottom: 4px;
`;

const PasswordIcon = exports.PasswordIcon = (0, _styledComponents.default)(_icon.default)`
  position: absolute;
  left: 0;
  bottom: 3px;

  &:hover {
    cursor: pointer;
  }
`;