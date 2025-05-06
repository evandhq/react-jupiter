"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.NavTitle = exports.NavItemTitle = exports.NavItemContainer = exports.Link = exports.Container = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactRouterDom = require("react-router-dom");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Container = exports.Container = _styledComponents.default.div`
  background: #fff;
  min-width: 180px;
  color: #444;
  ${(_ref) => {let { ltr } = _ref;return ltr ? 'border-right: 1px solid #e5e5e5' : 'border-left: 1px solid #e5e5e5';}}
  float: right;
  position: absolute;
  height: 100%;
`;


const NavTitle = exports.NavTitle = _styledComponents.default.div`
  padding: 8px;
  margin-bottom: -8px;
  font-size: 0.92em;
  color: #a5a5a5;
`;

const NavItemContainer = exports.NavItemContainer = _styledComponents.default.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  background: ${(props) => props.selected ? '#F5F5F5' : 'inherit'};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${(_ref2) => {let { ltr, selected } = _ref2;return !ltr ?
  `border-right: 4px solid ${selected ? '#DE0A5F' : 'transparent'}` :
  `border-left: 4px solid ${selected ? '#DE0A5F' : 'transparent'}`;}}
  &:hover {
    background: #f5f5f5;
  }
`;

const NavItemTitle = exports.NavItemTitle = _styledComponents.default.div`
  padding-left: 6px;
  line-height: 22px;
`;

const Link = exports.Link = (0, _styledComponents.default)(_reactRouterDom.Link)`
  color: #444;
  text-decoration: none;
`;