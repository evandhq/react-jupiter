"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { render: true };exports.render = void 0;var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");















Object.keys(_react2).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;if (key in exports && exports[key] === _react2[key]) return;Object.defineProperty(exports, key, { enumerable: true, get: function () {return _react2[key];} });});var _styledComponents = require("styled-components");var _themes = _interopRequireDefault(require("./themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}const AllTheProviders = (_ref) => {let { children } = _ref;return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, { theme: _themes.default }, children);};const customRender = (ui, options) => (0, _react2.render)(ui, { wrapper: AllTheProviders, ...options }); // re-export everything

// override render method
exports.render = customRender;