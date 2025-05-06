"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _components = require("../../../components");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const { Heading } = _components.Typography;

const ButtonWrapper = _styledComponents.default.div`
  display: flex;
`;

const ButtonPage = () => /*#__PURE__*/
_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 1 }, "\u062F\u06A9\u0645\u0647 \u0647\u0627"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u0646\u0645\u0648\u0646\u0647 \u062F\u06A9\u0645\u0647 \u067E\u06CC\u0634\u0641\u0631\u0636"

), /*#__PURE__*/
_react.default.createElement(_components.Button, null, "\u062F\u06A9\u0645\u0647"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u062F\u06A9\u0645\u0647 \u0622\u06CC\u06A9\u0648\u0646 \u062F\u0627\u0631"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { icon: "watch-later" }, "\u062F\u06A9\u0645\u0647 \u0622\u06CC\u06A9\u0648\u0646 \u062F\u0627\u0631"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u062F\u06A9\u0645\u0647 full-width"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { wide: true, size: "sm" }, "\u062F\u06A9\u0645\u0647 full-width (sm size)"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { wide: true }, "\u062F\u06A9\u0645\u0647 full-width(md size - default)"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { wide: true, size: "lg" }, "\u062F\u06A9\u0645\u0647 full-width(lg size)"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u062F\u06A9\u0645\u0647 \u062F\u0631 \u0627\u0646\u062F\u0627\u0632\u0647 \u0647\u0627\u06CC \u0645\u062A\u0641\u0627\u0648\u062A"

), /*#__PURE__*/

_react.default.createElement(Heading, { level: 3 }, "sm size"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { size: "sm" }, "\u062F\u06A9\u0645\u0647"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { size: "sm", icon: "watch-later" }, "\u062F\u06A9\u0645\u0647"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 3 }, "md size (default)"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { size: "md" }, "\u062F\u06A9\u0645\u0647"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { size: "md", icon: "watch-later" }, "\u062F\u06A9\u0645\u0647"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 3 }, "lg size"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { size: "lg" }, "\u062F\u06A9\u0645\u0647"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { size: "lg", icon: "watch-later" }, "\u062F\u06A9\u0645\u0647"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u062F\u06A9\u0645\u0647 \u0647\u0627 \u062F\u0631 \u0627\u0633\u062A\u0627\u06CC\u0644 \u0647\u0627 \u0645\u062A\u0641\u0627\u0648\u062A \u0648 \u0631\u0646\u06AF \u0647\u0627\u06CC \u0645\u062A\u0641\u0627\u0648\u062A"

), /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "\u0631\u0646\u06AF \u0642\u0631\u0645\u0632"

), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0642\u0631\u0645\u0632 - normal"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", mainColor: "red" }, "\u062F\u06A9\u0645\u0647 primary (default)"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", mainColor: "red" }, "\u062F\u06A9\u0645\u0647 secondary"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later", mainColor: "red" }, "\u062F\u06A9\u0645\u0647 tertiary"

)
), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0642\u0631\u0645\u0632 - disabled"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", mainColor: "red", disabled: true }, "\u062F\u06A9\u0645\u0647 primary (default) - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", mainColor: "red", disabled: true }, "\u062F\u06A9\u0645\u0647 secondary - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later", mainColor: "red", disabled: true }, "\u062F\u06A9\u0645\u0647 tertiary - disabled"

)
), /*#__PURE__*/
_react.default.createElement("hr", null), /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "\u0631\u0646\u06AF \u0633\u0628\u0632"

), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0633\u0628\u0632 - normal"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", mainColor: "green" }, "\u062F\u06A9\u0645\u0647 primary (default)"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", mainColor: "green" }, "\u062F\u06A9\u0645\u0647 secondary"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later", mainColor: "green" }, "\u062F\u06A9\u0645\u0647 tertiary"

)
), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0633\u0628\u0632 - disabled"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", mainColor: "green", disabled: true }, "\u062F\u06A9\u0645\u0647 primary (default) - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", mainColor: "green", disabled: true }, "\u062F\u06A9\u0645\u0647 secondary - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later", mainColor: "green", disabled: true }, "\u062F\u06A9\u0645\u0647 tertiary - disabled"

)
), /*#__PURE__*/
_react.default.createElement("hr", null), /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "\u0631\u0646\u06AF \u0632\u0631\u062F"

), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0632\u0631\u062F - normal"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", mainColor: "yellow" }, "\u062F\u06A9\u0645\u0647 primary (default)"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", mainColor: "yellow" }, "\u062F\u06A9\u0645\u0647 secondary"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later", mainColor: "yellow" }, "\u062F\u06A9\u0645\u0647 tertiary"

)
), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0632\u0631\u062F - disabled"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", mainColor: "yellow", disabled: true }, "\u062F\u06A9\u0645\u0647 primary (default) - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", mainColor: "yellow", disabled: true }, "\u062F\u06A9\u0645\u0647 secondary - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later", mainColor: "yellow", disabled: true }, "\u062F\u06A9\u0645\u0647 tertiary - disabled"

)
), /*#__PURE__*/
_react.default.createElement("hr", null), /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "\u0631\u0646\u06AF \u0622\u0628\u06CC"

), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0622\u0628\u06CC - normal"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", mainColor: "blue" }, "\u062F\u06A9\u0645\u0647 primary (default)"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", mainColor: "blue" }, "\u062F\u06A9\u0645\u0647 secondary"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later", mainColor: "blue" }, "\u062F\u06A9\u0645\u0647 tertiary"

)
), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0622\u0628\u06CC - disabled"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", mainColor: "blue", disabled: true }, "\u062F\u06A9\u0645\u0647 primary (default) - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", mainColor: "blue", disabled: true }, "\u062F\u06A9\u0645\u0647 secondary - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later", mainColor: "blue", disabled: true }, "\u062F\u06A9\u0645\u0647 tertiary - disabled"

)
), /*#__PURE__*/
_react.default.createElement("hr", null), /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "\u0631\u0646\u06AF \u0622\u0628\u06CC \u062A\u06CC\u0631\u0647 - \u067E\u06CC\u0634\u0641\u0631\u0636"

), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0622\u0628\u06CC \u062A\u06CC\u0631\u0647 - \u067E\u06CC\u0634\u0641\u0631\u0636 - normal"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later" }, "\u062F\u06A9\u0645\u0647 primary (default)"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later" }, "\u062F\u06A9\u0645\u0647 secondary"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later" }, "\u062F\u06A9\u0645\u0647 tertiary"

)
), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u0631\u0646\u06AF \u0622\u0628\u06CC \u062A\u06CC\u0631\u0647 - \u067E\u06CC\u0634\u0641\u0631\u0636 - disabled"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", disabled: true }, "\u062F\u06A9\u0645\u0647 primary (default) - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", disabled: true }, "\u062F\u06A9\u0645\u0647 secondary - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "tertiary", icon: "watch-later", disabled: true }, "\u062F\u06A9\u0645\u0647 tertiary - disabled"

)
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "\u062F\u06A9\u0645\u0647 \u0644\u06CC\u0646\u06A9 \u062F\u0627\u0631"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { linkTo: "/avatar" }, "\u062F\u06A9\u0645\u0647 \u0644\u06CC\u0646\u06A9 \u0633\u0627\u062F\u0647 \u0628\u0627 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u067E\u06CC\u0634\u0641\u0631\u0636"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", linkTo: "https://sciencebusiness.net/categories/dfgdfg", linkTarget: "_blank" }, "\u062F\u06A9\u0645\u0647 \u0644\u06CC\u0646\u06A9 \u0628\u0627 \u0644\u06CC\u0646\u06A9 \u062E\u0627\u0631\u062C\u06CC"

), /*#__PURE__*/
_react.default.createElement(_components.Button, {
  styleType: "tertiary",
  icon: "watch-later",
  renderLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element),
  linkTarget: "_self" },
"\u062F\u06A9\u0645\u0647 \u0644\u06CC\u0646\u06A9 \u062F\u0627\u062E\u0644\u06CC (\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0645\u0644)"

)
), /*#__PURE__*/
_react.default.createElement(Heading, { level: 4 }, "\u062F\u06A9\u0645\u0647 \u0644\u06CC\u0646\u06A9 \u062F\u0627\u0631 - disabled"

), /*#__PURE__*/
_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "primary", icon: "watch-later", linkTo: "/avatar", disabled: true }, "\u062F\u06A9\u0645\u0647 \u0644\u06CC\u0646\u06A9 \u0633\u0627\u062F\u0647 \u0628\u0627 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u067E\u06CC\u0634\u0641\u0631\u0636 - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, { styleType: "secondary", icon: "watch-later", linkTo: "https://sciencebusiness.net/categories/dfgdfg", linkTarget: "_blank", disabled: true }, "\u062F\u06A9\u0645\u0647 \u0644\u06CC\u0646\u06A9 \u0628\u0627 \u0644\u06CC\u0646\u06A9 \u062E\u0627\u0631\u062C\u06CC - disabled"

), /*#__PURE__*/
_react.default.createElement(_components.Button, {
  styleType: "tertiary",
  icon: "watch-later",
  linkTarget: "_self",
  renderLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element),
  disabled: true },
"\u062F\u06A9\u0645\u0647 \u0644\u06CC\u0646\u06A9 \u062F\u0627\u062E\u0644\u06CC (\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0645\u0644) - disabled"

)
), /*#__PURE__*/
_react.default.createElement("br", null)

);var _default = exports.default =


ButtonPage;