"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _theme = _interopRequireDefault(require("../theme"));
var _errorMsg = _interopRequireDefault(require("../errorMsg"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}



















const TextInput = (_ref) =>









{let { type = 'text', label = null, id = null, placeholder = null, disabled = false, description = null, errorMessage = '', inputRef = null, htmlElementName } = _ref;
  const [value, setValue] = (0, _react.useState)('');
  const [displayedPassword, setDisplayedPassword] = (0, _react.useState)(false);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleDisplayPassword() {
    setDisplayedPassword(!displayedPassword);
  }

  function handleFocus(e) {
    e.target.setSelectionRange(0, 0);
  }

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_index.Label, { htmlFor: id || `${type}-${htmlElementName.split(' ').join('')}`, "data-test": "text-input" },
    label && /*#__PURE__*/
    _react.default.createElement(_index.LabelContainer, { bold: true, size: 14 },
    label
    ),

    description && /*#__PURE__*/
    _react.default.createElement(_index.DescriptionContainer, { bold: true, size: 10, color: "gray", "data-test": "text-input-description" },
    description
    ), /*#__PURE__*/

    _react.default.createElement(_index.Input, {
      id: id || `${type}-${htmlElementName.split(' ').join('')}`,
      name: htmlElementName,
      type: displayedPassword || type === 'text' ? 'text' : 'password',
      placeholder: placeholder,
      value: value,
      onChange: handleChange,
      onFocus: handleFocus,
      disabled: disabled,
      ref: inputRef }
    ),
    type === 'password' && /*#__PURE__*/
    _react.default.createElement(_index.PasswordIcon, {
      name: displayedPassword ? 'visibility-off' : 'visibility',
      color: displayedPassword ? 'blue' : 'gray',
      onClick: handleDisplayPassword }
    )

    ), /*#__PURE__*/
    _react.default.createElement(_errorMsg.default, { errorMessage: errorMessage })
    ));

};var _default = exports.default =

TextInput;