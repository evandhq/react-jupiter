"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireWildcard(require("react"));
var _detectMobile = require("../utils/detectMobile");
var _index = require("./index.styles");
var _icon = _interopRequireDefault(require("../icon"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}

const Panel = (_ref) => {let { item } = _ref;
  const panelRef = (0, _react.useRef)();

  const handleClick = () => {
    const icon = document.getElementById(`icon-${item.key}`);

    if (panelRef.current.classList.contains('collapse')) {
      panelRef.current.classList.remove('collapse');
      icon.classList.remove('new-icon-arrow-drop-down');
      icon.classList.add('new-icon-arrow-drop-up');
    } else {
      panelRef.current.classList.add('collapse');
      icon.classList.remove('new-icon-arrow-drop-up');
      icon.classList.add('new-icon-arrow-drop-down');
    }
  };

  return (/*#__PURE__*/
    _react.default.createElement(_index.Panel, { className: item.mode, status: item.status, bold: item.bold }, /*#__PURE__*/
    _react.default.createElement("a", { className: "panel-heading", onClick: () => handleClick(item.key) }, /*#__PURE__*/
    _react.default.createElement("h4", { className: "panel-title" }, /*#__PURE__*/
    _react.default.createElement(_icon.default, { name: item.status ? 'check-circle' : 'error', size: "sm", color: item.status ? 'green' : 'gray' }), /*#__PURE__*/
    _react.default.createElement("span", null, item.title)
    ), /*#__PURE__*/
    _react.default.createElement("div", null,
    !_detectMobile.isMobile && item.meta, /*#__PURE__*/
    _react.default.createElement(_icon.default, { id: `icon-${item.key}`, name: "arrow-drop-down", size: "sm", color: item.status ? 'white' : 'darkBlue' })
    )
    ), /*#__PURE__*/
    _react.default.createElement("div", { id: item.key, ref: panelRef, className: `panel-collapse ${item.collapse && 'collapse'}` }, /*#__PURE__*/
    _react.default.createElement("div", { className: "panel-body" }, item.body)
    )
    ));

};var _default = exports.default =
Panel;