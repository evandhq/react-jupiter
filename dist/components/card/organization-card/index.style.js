"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _cardTemplate = _interopRequireDefault(require("../card-template"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Container = (0, _styledComponents.default)(_cardTemplate.default)`
  padding: 16px; 
  height: 200px;
  justify-content: space-between;
`;var _default = exports.default =

Container;