"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.PanelGroup = exports.Panel = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const PanelGroup = exports.PanelGroup = _styledComponents.default.div`
    font-family: 'IranSharp';
`;

const Panel = exports.Panel = _styledComponents.default.div`
    background-color: #fff;
    margin: 10px 0;
    border: ${(props) => props.status || props.bold ? '2px solid rgb(80, 89, 117)' : '1px solid #000000'};
    border-radius: 7px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    padding: 10px;

    &.white {
        background: #ffffff;
    }
    &.light {
        background: #caf0fc;
    }
    &.white, &.light {
        & .panel-heading {
            color: #000000;
        }
    }
    &.dark {
        background: rgb(80, 89, 117);
        & .panel-heading {
            color: #ffffff;
        }
    }

    .collapse {
        display: none;
    }

    .panel-heading {
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        &:hover {
            cursor: pointer;
        }        
    }
    
    .panel-title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        color: inherit;
    }
`;