"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.ProgressBar = exports.Numbers = exports.Names = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const ProgressBar = exports.ProgressBar = _styledComponents.default.div`
    background-color: rgb(167, 167, 167);
    color: rgb(68, 68, 68);
    height: 20px;
    border-radius: 16px;

    &:after {
        content: "";
        display: table;
        clear: both;
    }

    & div.filled {
        min-width: 50px;
        max-width: 100%;
        width: ${(props) => props.width}%;
        height: 20px;
        background: rgb(80, 89, 117);
        border-radius: 16px;
        display: flex;
        align-items: center;
        @media only screen and (min-width: ${_themes.default.breakpoints.sm}px) {
            font-size: 15px;
        }
        @media only screen and (max-width: ${_themes.default.breakpoints.sm - 1}px) {
            font-size: 8px;
        }
        font-weight: bold;
        color: #fff;
        justify-content: center;
        float: right;
      }
    }
`;

const Names = exports.Names = _styledComponents.default.div`
    display: flex;
    justify-content: space-between;
    direction: rtl;
    position: relative;
    width: 100%;
    font-family: 'IranSharp';
    & span > i {
        display: block;
    }
    & span:first-child {
        position: relative;
        right: ${(props) => props.points.partner * 100 / props.points.colleague - 2}%;
    }
`;

const Numbers = exports.Numbers = _styledComponents.default.div`
    display: flex;
    justify-content: space-between;
    direction: rtl;
    font-family: 'IranSharp';
    position: relative;
    & span:nth-child(2) {
        position: absolute;
        right: ${(props) => props.points.partner * 100 / props.points.colleague}%
    }
`;