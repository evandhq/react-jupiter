"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Wrapper = exports.VerticalDivider = exports.StyledImgIcon = exports.InfoWrapper = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const StyledImgIcon = exports.StyledImgIcon = _styledComponents.default.span`
  font-size: 67px;
`;

const Wrapper = exports.Wrapper = _styledComponents.default.div`
  cursor: pointer;
  border: 1px solid ${(_ref) => {let { theme, isActive } = _ref;return isActive ? theme.colors.riverBedDark : 'transparent';}};
  border-radius: ${(_ref2) => {let { theme } = _ref2;return `${theme.borderRadius}px`;}};
  padding: ${(_ref3) => {let { theme } = _ref3;return theme.spacing[5];}} ${(_ref4) => {let { theme } = _ref4;return theme.spacing[6];}};
  box-sizing: border-box;
  display: flex;
`;

const InfoWrapper = exports.InfoWrapper = _styledComponents.default.div`
  width: calc(100% - 52px);
  padding-right: ${(_ref5) => {let { theme } = _ref5;return theme.spacing[4];}};

  & > span {
    display: block;
  }
`;

const VerticalDivider = exports.VerticalDivider = _styledComponents.default.span`
  display: inline-block;
  width: 1px;
  height: 8px;
  margin: 0 ${(_ref6) => {let { theme } = _ref6;return theme.spacing[4];}};
  background: ${(_ref7) => {let { theme } = _ref7;return theme.colors.riverBed;}};
`;