"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _components = require("../../../components");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const { Heading } = _components.Typography;
const { TextInput } = _components.Form;

const Br = _styledComponents.default.br`
  margin: 8px;
`;

const FormPage = () => /*#__PURE__*/
_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 1 }, "\u0627\u0644\u0645\u0627\u0646 \u0647\u0627\u06CC \u0641\u0631\u0645"

), /*#__PURE__*/
_react.default.createElement(Br, null), /*#__PURE__*/
_react.default.createElement(Br, null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "TextInput"

), /*#__PURE__*/
_react.default.createElement(TextInput, { htmlElementName: "text-name-01", label: "\u0627\u06CC\u0646 \u0644\u06CC\u0628\u0644 \u0627\u0633\u062A" }), /*#__PURE__*/
_react.default.createElement(Br, null), /*#__PURE__*/
_react.default.createElement(TextInput, { htmlElementName: "text-name-0100" }), /*#__PURE__*/
_react.default.createElement(Br, null), /*#__PURE__*/
_react.default.createElement(TextInput, { htmlElementName: "text-name", label: "\u0627\u06CC\u0646 \u0644\u06CC\u0628\u0644 \u0627\u0633\u062A", placeholder: "\u0645\u062A\u0646 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F" }), /*#__PURE__*/
_react.default.createElement(Br, null), /*#__PURE__*/
_react.default.createElement(TextInput, { htmlElementName: "disable", label: "\u0627\u06CC\u0646 \u0644\u06CC\u0628\u0644 \u0627\u0633\u062A", placeholder: "\u0645\u062A\u0646 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", disabled: true }), /*#__PURE__*/
_react.default.createElement(Br, null), /*#__PURE__*/
_react.default.createElement(TextInput, { htmlElementName: "with-desc", label: "\u0627\u06CC\u0646 \u0644\u06CC\u0628\u0644 \u0627\u0633\u062A", placeholder: "\u0645\u062A\u0646 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", description: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u06A9\u0645 \u0648 \u0628\u06CC\u0634" }), /*#__PURE__*/
_react.default.createElement(Br, null), /*#__PURE__*/
_react.default.createElement(TextInput, { type: "password", htmlElementName: "pass-input", label: "\u0627\u06CC\u0646 \u0644\u06CC\u0628\u0644 \u0627\u0633\u062A" }), /*#__PURE__*/
_react.default.createElement(Br, null), /*#__PURE__*/
_react.default.createElement(TextInput, { type: "password", htmlElementName: "err-example", label: "\u0627\u06CC\u0646 \u0644\u06CC\u0628\u0644 \u0627\u0633\u062A", errorMessage: "\u0627\u0631\u0648\u0631 \u0632\u06CC\u0628\u0627 \u0628\u0648\u062F \u062F\u0631 \u0627\u06CC\u0646 \u0632\u0645\u0627\u0646\u0647 \u0628\u0644\u0627" }), /*#__PURE__*/
_react.default.createElement(Br, null)

);var _default = exports.default =


FormPage;