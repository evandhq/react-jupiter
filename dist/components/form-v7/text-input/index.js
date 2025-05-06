"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = require("styled-components");
var _reactHookForm = require("react-hook-form");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _theme = _interopRequireDefault(require("../theme"));
var _errorMsg = _interopRequireDefault(require("../errorMsg"));
var _label = _interopRequireDefault(require("../label"));
var _index = require("./index.style");




var _index2 = require("../index.style");
var _numbers = require("../../utils/numbers");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == typeof i ? i : i + "";}function _toPrimitive(t, r) {if ("object" != typeof t || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != typeof i) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}






















class TextInput extends _react.Component {
  constructor(props) {
    super(props);_defineProperty(this, "togglePasswordVisibility",





    () => {
      this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
    });_defineProperty(this, "handleFocus",

    (e) => {
      e.target.setSelectionRange(0, 0);
    });this.state = { showPassword: false };}

  render() {
    const {
      type = 'text',
      label = null,
      htmlElementName,
      id = null,
      placeholder = null,
      disabled = false,
      description = null,
      required = false,
      number = null,
      rtl = true,
      onFocus = () => {},
      readOnly = false,
      register,
      control
    } = this.props;

    const { showPassword } = this.state;

    return (/*#__PURE__*/
      _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
      _react.default.createElement(_index2.Fieldset, null, /*#__PURE__*/
      _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
      _react.default.createElement(_label.default, {
        htmlFor: id || `${type}-${htmlElementName.split(' ').join('')}`,
        label: label,
        number: number,
        required: required }
      ),
      description && /*#__PURE__*/
      _react.default.createElement(_index.DescriptionContainer, { size: 10, color: "gray", "data-test": "text-input-description" },
      description
      ), /*#__PURE__*/

      _react.default.createElement(_reactHookForm.Controller, {
        name: htmlElementName,
        control: control,
        rules: { required: required ? 'این فیلد اجباری است' : false },
        render: (_ref) => {let { field: { value }, fieldState } = _ref;return (/*#__PURE__*/
            _react.default.createElement("div", { style: { position: 'relative' } },
            type === 'password' && /*#__PURE__*/
            _react.default.createElement(_index.PasswordIcon, {
              name: showPassword ? 'visibility-off' : 'visibility',
              color: "gray",
              onClick: this.togglePasswordVisibility,
              style: {
                cursor: 'pointer', position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)'
              } }
            ), /*#__PURE__*/

            _react.default.createElement(_index.Input, _extends({
              id: id || `${type}-${htmlElementName.split(' ').join('')}`,
              name: htmlElementName,
              type: showPassword ? 'text' : type,
              placeholder: placeholder,
              defaultValue: value,
              rtl: rtl },
            register(htmlElementName, {
              onFocus: this.handleFocus,
              disabled,
              onChange: (e) => (0, _numbers.fixNumbers)(e)
            }), {
              onFocus: onFocus,
              readOnly: readOnly })
            ), /*#__PURE__*/
            _react.default.createElement(_errorMsg.default, { errorMessage: fieldState && fieldState.error?.message })
            ));} }

      )
      )
      ));

  }
}var _default = exports.default =

TextInput;