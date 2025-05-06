"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Loading = exports.InputConiatiner = exports.Container = exports.CaptchaBoxContainer = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _theme = _interopRequireDefault(require("../theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Container = exports.Container = _styledComponents.default.div`
  flex-shrink: 0;
  margin: 6px 6px 0 0;

  & .hide {
    display: none;
  }
`;

const Loading = exports.Loading = _styledComponents.default.div`
  height: 32px;
  width: 120px;
  background: ${_theme.default.disabled.color};
  animation-name: sparkle;
  animation-duration: 2s;
  animation-iteration-count: infinite;

    @keyframes sparkle {
      0% {opacity: 0;}
      50% {opacity: 1;}
      70% {opacity: 1;}
      100% {opacity: 0;}
    }
  }
`;

const CaptchaBoxContainer = exports.CaptchaBoxContainer = _styledComponents.default.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

const InputConiatiner = exports.InputConiatiner = _styledComponents.default.div`
  flex-grow: 1;
`;