"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.StyledButton = exports.ButtonContainer = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _button = _interopRequireDefault(require("../button"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const ButtonContainer = exports.ButtonContainer = _styledComponents.default.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
`;

const StyledButton = exports.StyledButton = (0, _styledComponents.default)(_button.default)`
  margin-left: 8px;

  &.follow-button {
    min-width: 88px;
  }
`;