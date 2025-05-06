"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Tr = exports.TableContainer = exports.ShowMoreButton = exports.ActionsContainer = exports.ActionCellContainer = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _theme = require("../utils/theme");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const TableContainer = exports.TableContainer = _styledComponents.default.div`
  overflow-x: auto;

  table {
    width: 100%;
  
    tr {
      border-top: 1px solid;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      padding: 16px;
    }
    
    tbody tr:nth-child(2n-1) {
      background: #f9f9f9;
      td {
        background: #f9f9f9;
      }
    }
    tbody tr:nth-child(2n) {
      background: white;
      td {
        background: white;
      }
    }
  
    th, td {
      width: 177px;
      text-align: right;
      display: inline-flex;
      margin-left: 16px;
    }
  ${(_ref) => {let { isResponsiveView, actionColumnNumber } = _ref;
  if (actionColumnNumber && isResponsiveView) {
    return `
        td:last-child, th:last-child {
          margin-left: 117px;
        }
        td:nth-child(${actionColumnNumber}) {
          position: absolute;
          left: 10px;
          margin: -4px;
          padding-right: 16px;
          width: 130px;
        }
        th:nth-child(${actionColumnNumber}) {
          background: white;
          position: absolute;
          left: 10px;
          margin: 0 -11px;
          padding-right: 16px;
          width: 130px;
        }
      `;
  }
  return '';
}}
  }
`;

const ShowMoreButton = exports.ShowMoreButton = _styledComponents.default.button`
  background: transparent;
  border: none;
  color: ${(_ref2) => {let { theme } = _ref2;return theme.showMoreColor;}};
  font-size: 33px;
  line-height: 10px;
  padding: 0;
  display: inline-flex;
  align-items: flex-start;
  transform: rotate(90deg);
  height: 36px;
  width: 36px;
  cursor: pointer;
  padding-right: 5px;
`;

const ActionCellContainer = exports.ActionCellContainer = _styledComponents.default.div`
  display: flex;
`;

const ActionsContainer = exports.ActionsContainer = _styledComponents.default.div`
  box-shadow:
    ${(_ref3) => {let { theme } = _ref3;return `0 0 ${theme.shadow.blur}px ${theme.shadow.spread}px rgba(0, 0, 0, ${theme.shadow.opacity});`;}}
  background: white;
  position: absolute;
  z-index: 1;
`;

const Tr = exports.Tr = _styledComponents.default.tr`
  ${(_ref4) => {let { status } = _ref4;
  if (status) {
    return `
        border-right: 4px solid ${(0, _theme.getColorFromName)(undefined, status)};
        transition: border 0.25s;

        &:hover {
          border-right-width: 8px;
        }
      `;
  }
  return '';
}};
`;