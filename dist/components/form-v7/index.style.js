"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Fieldset = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Fieldset = exports.Fieldset = _styledComponents.default.fieldset`
  position: relative;
  border: none;
  padding: 0;
  margin-bottom: 20px;
  * {
    box-sizing: content-box;
  }
`;