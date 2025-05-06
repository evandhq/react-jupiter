"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _index = require("./index.styles");
var _panel = _interopRequireDefault(require("./panel"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Accordion = (_ref) => {let { items } = _ref;return (/*#__PURE__*/
    _react.default.createElement(_index.PanelGroup, null,
    items.map((item, key) => /*#__PURE__*/_react.default.createElement(_panel.default, { item: item, key: key }))
    ));};


Accordion.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    mode: _propTypes.default.oneOf(['white', 'light', 'dark']),
    title: _propTypes.default.string.isRequired,
    key: _propTypes.default.string.isRequired,
    status: _propTypes.default.bool,
    collapse: _propTypes.default.bool.isRequired,
    meta: _propTypes.default.node,
    body: _propTypes.default.node.isRequired,
    bold: _propTypes.default.bool
  })).isRequired
};var _default = exports.default =

Accordion;