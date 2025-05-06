"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}







function TabPanel(_ref) {let { children, label, tabKey } = _ref;
  return (/*#__PURE__*/
    _react.default.createElement("div", { className: `${label}-${tabKey}`, "data-test": "tabs-panel" },
    children
    ));

}var _default = exports.default =

TabPanel;