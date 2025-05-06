"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.TextCenter = exports.StyledButton = exports.ResponsiveFlex = exports.PartnershipBox = exports.LTRContainer = exports.Container = exports.BorderedBox = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _cardTemplate = _interopRequireDefault(require("../card-template"));
var _button = _interopRequireDefault(require("../../button"));
var _themes = _interopRequireDefault(require("../../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Container = exports.Container = (0, _styledComponents.default)(_cardTemplate.default)`
  padding: 16px;
`;

const LTRContainer = exports.LTRContainer = _styledComponents.default.div`
  display: flex;
`;

const StyledButton = exports.StyledButton = (0, _styledComponents.default)(_button.default)`
  margin: 4px 8px;
  direction: rtl;
  min-width: 120px;

  &.follow-button {
  }
`;

const BorderedBox = exports.BorderedBox = _styledComponents.default.div`
  border: ${(_ref) => {let { theme } = _ref;return theme.border.lightBlue;}};
  padding: 8px 16px;
  margin: 8px 8px 0 8px;
  display: flex;
  justify-content: space-between;
`;

const TextCenter = exports.TextCenter = _styledComponents.default.div`
  text-align: center;
`;

const ResponsiveFlex = exports.ResponsiveFlex = _styledComponents.default.div`
  display: flex;
  @media only screen and (max-width: ${_themes.default.breakpoints.sm}px) {
    flex-flow: column nowrap;
  }
  @media only screen and (min-width: ${_themes.default.breakpoints.sm}px) {
    flex-flow: row nowrap;
  }
  align-items: center;
  justify-content: space-between;
`;

const PartnershipBox = exports.PartnershipBox = _styledComponents.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 199, 39, 0.1);
  border-radius: 5px;
  color: #FFD324;
  margin-top: 10px;
  align-items: center;
  width: 110px;
  height: 25px;
`;