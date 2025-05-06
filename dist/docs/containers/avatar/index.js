"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _components = require("../../../components");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const AvatarWrapper = (0, _styledComponents.default)(_components.Avatar)`
  border: 1px solid red;
`;

const { Heading, Link } = _components.Typography;

const AvatarPage = () => /*#__PURE__*/
_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 1 }, "\u0622\u0648\u0627\u062A\u0627\u0631"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u0622\u0648\u0627\u062A\u0627\u0631 \u0628\u0627 \u062D\u062F\u0627\u0642\u0644 \u067E\u0627\u0631\u0627\u0645\u062A\u0631 \u0647\u0627"

), /*#__PURE__*/
_react.default.createElement(_components.Avatar, { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u0622\u0648\u0627\u062A\u0627\u0631 \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0644\u06CC\u0646\u06A9"

), /*#__PURE__*/
_react.default.createElement(Link, { to: "http://yahoo.com", external: true }, /*#__PURE__*/
_react.default.createElement(_components.Avatar, { alt: "cat", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" })
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u0622\u0648\u0627\u062A\u0627\u0631 \u062F\u0631 \u0627\u0646\u062F\u0627\u0632\u0647 \u0647\u0627\u06CC \u0645\u062A\u0641\u0627\u0648\u062A"

), /*#__PURE__*/

_react.default.createElement(Heading, { level: 3 }, "sm size"

), /*#__PURE__*/
_react.default.createElement(_components.Avatar, { alt: "cat", size: "sm", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 3 }, "md size (default)"

), /*#__PURE__*/
_react.default.createElement(_components.Avatar, { alt: "cat", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 3 }, "lg size"

), /*#__PURE__*/
_react.default.createElement(_components.Avatar, { alt: "cat", size: "lg", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u0622\u0648\u0627\u062A\u0627\u0631 \u0628\u0627 wrapper \u0627\u06CC \u06A9\u0647 \u0648\u06CC\u0698\u06AF\u06CC \u0647\u0627\u06CC \u0622\u0646 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u0645\u06CC\u062F\u0647\u062F"



), /*#__PURE__*/
_react.default.createElement(AvatarWrapper, { alt: "cat", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u0622\u0648\u0627\u062A\u0627\u0631 \u0628\u0627 \u0622\u062F\u0631\u0633 \u062F\u0647\u06CC \u0646\u0627 \u0645\u0648\u062C\u0648\u062F"

), /*#__PURE__*/
_react.default.createElement(_components.Avatar, { alt: "\u06AF\u0631\u0628\u0647 \u06CC \u0646\u0627\u0632 \u0646\u0627\u0632\u06CC", src: "wrong-src" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u0622\u0648\u0627\u062A\u0627\u0631  \u0628\u062F\u0648\u0646 \u0622\u062F\u0631\u0633 \u062F\u0647\u06CC"

), /*#__PURE__*/
_react.default.createElement(_components.Avatar, { alt: "\u06AF\u0631\u0628\u0647 \u06CC \u0646\u0627\u0632 \u0646\u0627\u0632\u06CC" }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/


_react.default.createElement(Heading, { level: 2 }, "\u062A\u0633\u062A \u0641\u0627\u06CC\u0644"

), /*#__PURE__*/
_react.default.createElement(_components.FileItem, {
  description: "\u0645\u062A\u0646 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A",
  fileSize: "\u06F5 \u0645\u06AF\u0627\u0628\u0627\u06CC\u062A",
  onClick: () => window.console.log('finallyyyyy'),
  price: "\u06F6\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0646",
  title: "\u0641\u0627\u06CC\u0644 \u062C\u0644\u0633\u0647 \u0627\u0648\u0644 \u0645\u0627",
  type: "zip" }
), /*#__PURE__*/
_react.default.createElement("br", null)

);var _default = exports.default =


AvatarPage;