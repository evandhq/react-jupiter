"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Label = _styledComponents.default.label`
    position: relative;
    display: block;
    margin-bottom: 5px;
    & span.required {
        color: ${(_ref) => {let { theme } = _ref;return theme.colors.red;}};
        margin-right: 5px;
    }
`;var _default = exports.default =
Label;