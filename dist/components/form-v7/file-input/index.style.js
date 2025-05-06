"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.PasswordIcon = exports.LabelContainer = exports.Input = exports.DescriptionContainer = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _typography = require("../../typography");
var _icon = _interopRequireDefault(require("../../icon"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Input = exports.Input = _styledComponents.default.input`
  font-family: 'IranSharp';
  font-weight: bold;
  font-size: 12px;
  border-radius: ${(_ref) => {let { theme } = _ref;return `${theme.borderRadius}px`;}};
  border: solid 1px ${(_ref2) => {let { theme } = _ref2;return theme.borderColor.normal;}};
  padding: 4px;
  box-sizing: border-box;
  width: 100%;

  &::file-selector-button {
    color: ${(_ref3) => {let { theme } = _ref3;return `${theme.colors.blue}`;}};
    padding: 0.5em;
    border: ${(_ref4) => {let { theme } = _ref4;return `thin solid ${theme.colors.blue}`;}};
    border-radius: 3px;
    width: 100px;
    height: 80;
  }

  &[disabled=""]{
    background-color: ${(_ref5) => {let { theme } = _ref5;return theme.disabled.background;}};
    color: ${(_ref6) => {let { theme } = _ref6;return theme.disabled.color;}};
    border-color: transparent;


    &:hover {
      border-color: transparent;
    }
  }

  &:hover {
    border-color: ${(_ref7) => {let { theme } = _ref7;return theme.borderColor.hover;}};
  }

  &:focus {
    border-color: ${(_ref8) => {let { theme } = _ref8;return theme.borderColor.focus;}};
  }
`;

const LabelContainer = exports.LabelContainer = (0, _styledComponents.default)(_typography.Text)`
  display: block;
  margin-bottom: 8px;
`;

const DescriptionContainer = exports.DescriptionContainer = (0, _styledComponents.default)(_typography.Text)`
  display: block;
  margin-bottom: 4px;
`;

const PasswordIcon = exports.PasswordIcon = (0, _styledComponents.default)(_icon.default)`
  position: absolute;
  left: 0;
  bottom: 6px;

  &:hover {
    cursor: pointer;
  }
`;