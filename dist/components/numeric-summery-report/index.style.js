"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.ListItem = exports.ListContainer = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const ListContainer = exports.ListContainer = _styledComponents.default.ul`
  display: flex;
  height: 57px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const ListItem = exports.ListItem = _styledComponents.default.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;