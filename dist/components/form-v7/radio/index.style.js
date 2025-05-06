"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.RadioWrapper = exports.Input = exports.Fieldset = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Fieldset = exports.Fieldset = _styledComponents.default.fieldset`
  border: none;
  padding: 0;
  margin-bottom: 15px;
  * {
    box-sizing: content-box;
  }
`;

const RadioWrapper = exports.RadioWrapper = _styledComponents.default.div`
  display: flex;
  justify-content: space-between;
  ${(_ref) => {let { type } = _ref;return type === 'vertical' ? 'flex-direction: column;' : '';}}
`;

const Input = exports.Input = _styledComponents.default.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  position: relative;
  top: 4px;
  
  border: 1px solid ${(_ref2) => {let { disabled, theme } = _ref2;return disabled ? theme.disabled.color : theme.borderColor.normal;}};
  cursor: ${(_ref3) => {let { disabled } = _ref3;return disabled ? 'not-allowed' : 'pointer';}};
  transition: background 0.2s linear;

  &:hover {
    border: 1px solid ${(_ref4) => {let { disabled, theme } = _ref4;return disabled ? theme.disabled.color : theme.borderColor.hover;}};
  }

  &:checked {
    border: 1px solid ${(_ref5) => {let { theme } = _ref5;return theme.borderColor.normal;}};
    width: 16px;
    height: 16px;
    background: ${(_ref6) => {let { disabled, theme } = _ref6;return disabled ? theme.disabled.color : theme.borderColor.focus;}};

    &:after {
      background: ${(_ref7) => {let { disabled, theme } = _ref7;return disabled ? theme.disabled.color : theme.borderColor.focus;}};
    }
  }

  &:after {
    content: '';
    display: block;
    background: ${(_ref8) => {let { disabled } = _ref8;return disabled ? 'white' : 'transparent';}};
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    z-index: -1;
    top: -6px;
    right: -6px;
  }
`;