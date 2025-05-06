"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Input = exports.Fieldset = exports.CheckboxWrapper = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Fieldset = exports.Fieldset = _styledComponents.default.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

const CheckboxWrapper = exports.CheckboxWrapper = _styledComponents.default.div`
  display: flex;
  justify-content: space-between;
  ${(_ref) => {let { type } = _ref;return type === 'vertical' ? 'flex-direction: column;' : '';}}
`;

const Input = exports.Input = _styledComponents.default.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 16px;
  height: 16px;

  border: 1px solid ${(_ref2) => {let { disabled, theme } = _ref2;return disabled ? theme.disabled.color : theme.borderColor.normal;}};
  background: ${(_ref3) => {let { disabled, theme } = _ref3;return disabled ? theme.disabled.background : 'white';}};
  cursor: ${(_ref4) => {let { disabled } = _ref4;return disabled ? 'not-allowed' : 'pointer';}};
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 10px;
  
  &:hover {
    border-color: ${(_ref5) => {let { disabled, theme } = _ref5;return disabled ? theme.disabled.color : theme.borderColor.hover;}};
  }

  &:checked {
    border-color: ${(_ref6) => {let { disabled, theme } = _ref6;return disabled ? theme.disabled.color : theme.borderColor.focus;}};
    
    &:after {
      border-color: ${(_ref7) => {let { disabled, theme } = _ref7;return disabled ? theme.disabled.color : theme.borderColor.focus;}};
    }
  }

  &:after {
    content: '';
    display: block;

    height: 8px;
    width: 5px;
    position: absolute;
    right: 5px;
    top: 2px;

    transition: 0.2s all linear;

    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }
`;