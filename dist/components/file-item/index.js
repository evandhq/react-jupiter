"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../globalStyle"));
var _utils = _interopRequireDefault(require("./utils"));
var _typography = require("../typography");
var _theme = _interopRequireDefault(require("./theme"));
var _fileImgIcon = _interopRequireDefault(require("./fileImgIcon"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}












const FileItem = (_ref) =>






{let { type = 'zip', title = 'فایل دانلودی', description = '', price, fileSize = '', onClick = () => null } = _ref;
  const [isActive, setActivateValue] = (0, _react.useState)(false);

  function startHover() {
    setActivateValue(true);
  }

  function endHover() {
    setActivateValue(false);
  }

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_index.Wrapper, {
      "data-test": "file-item",
      isActive: isActive,
      onMouseEnter: startHover,
      onMouseLeave: endHover,
      onClick: onClick }, /*#__PURE__*/

    _react.default.createElement(_fileImgIcon.default, {
      iconFileName: (0, _utils.default)(type, !isActive) }
    ), /*#__PURE__*/

    _react.default.createElement(_index.InfoWrapper, null, /*#__PURE__*/
    _react.default.createElement(_typography.Text, {
      size: 14,
      bold: true,
      "data-test": "file-item-title" },

    title
    ),

    description ? /*#__PURE__*/
    _react.default.createElement(_typography.Text, {
      size: 10,
      "data-test": "file-item-desc",
      bold: true },

    description
    ) : /*#__PURE__*/

    _react.default.createElement("br", null), /*#__PURE__*/


    _react.default.createElement("div", null,
    fileSize && /*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
    _react.default.createElement(_typography.Text, {
      size: 10,
      "data-test": "file-item-size" },

    fileSize
    ), /*#__PURE__*/
    _react.default.createElement(_index.VerticalDivider, null)
    ), /*#__PURE__*/


    _react.default.createElement(_typography.Text, {
      size: 10,
      "data-test": "file-item-price" },

    price
    )
    )

    )
    )
    ));

};var _default = exports.default =

FileItem;