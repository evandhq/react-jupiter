"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = require("styled-components");
var _reactHookForm = require("react-hook-form");
var _theme = _interopRequireDefault(require("../theme"));
var _errorMsg = _interopRequireDefault(require("../errorMsg"));
var _index = require("./index.style");
var _label = _interopRequireDefault(require("../label"));
var _index2 = require("../index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}















const Select = (_ref) =>











{let { htmlElementName = 'select-element', defaultValue = '', placeholder = '', label = '', width = '100%', handleChange = undefined, isDisabled = false, required = false, number = null, control, children } = _ref;
  const renderSelect = () => /*#__PURE__*/
  _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
  _react.default.createElement(_index.SelectButton, { disabled: isDisabled }, /*#__PURE__*/
  _react.default.createElement(_reactHookForm.Controller, {
    name: htmlElementName,
    control: control,
    rules: { required: required ? 'این فیلد اجباری است' : false },
    render: (_ref2) => {let { field, fieldState } = _ref2;return (/*#__PURE__*/
        _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
        _react.default.createElement(_index.StyledSelect, _extends({},
        field, {
          defaultValue: defaultValue,
          onChange: (e) => {
            if (handleChange) {
              handleChange(e.target.value);
            }
            // Update RHF's state
            field.onChange(e);
          },
          width: width }),

        placeholder && /*#__PURE__*/
        _react.default.createElement("option", { value: "" }, placeholder),

        children
        ), /*#__PURE__*/
        _react.default.createElement(_errorMsg.default, { errorMessage: fieldState && fieldState.error?.message })
        ));} }

  )
  )
  );


  if (label) {
    return (/*#__PURE__*/
      _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
      _react.default.createElement(_index2.Fieldset, null, /*#__PURE__*/
      _react.default.createElement(_label.default, { htmlFor: htmlElementName, label: label, number: number, required: required }),
      renderSelect()
      )
      ));

  }
  return renderSelect();
};var _default = exports.default =

Select;