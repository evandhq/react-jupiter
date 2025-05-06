"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.TitleContainer = exports.Title = exports.SmallTitle = exports.Container = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _typography = require("../typography");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Container = exports.Container = _styledComponents.default.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

const TitleContainer = exports.TitleContainer = _styledComponents.default.div`
  height: 45px;
  overflow: hidden;
`;

const Title = exports.Title = (0, _styledComponents.default)(_typography.Heading)`
  margin: 8px 8px 8px 0;
  max-height: 45px;
  overflow: hidden;
`;

const SmallTitle = exports.SmallTitle = (0, _styledComponents.default)(_typography.Text)`
  margin-right: 8px;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
`;