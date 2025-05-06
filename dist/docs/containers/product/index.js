"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactRouterDom = require("react-router-dom");
var _components = require("../../../components");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const { Heading } = _components.Typography;

const Container = _styledComponents.default.div`
  margin: 8px;
`;

const ProductPage = () => /*#__PURE__*/
_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 1 }, "\u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u0647\u0627\u06CC product"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "product-properties"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(Container, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "single property"

), /*#__PURE__*/
_react.default.createElement(_components.ProductProperties, { list: [{ iconName: 'watch-later', text: 'watch text' }] })
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Container, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "multiple property"

), /*#__PURE__*/
_react.default.createElement(_components.ProductProperties, {
  list: [
  { iconName: 'watch-later', text: 'متن زیبا' },
  { iconName: 'alarm-off', text: 'متن دیگری' },
  { iconName: 'aspect-ratio', text: 'و باز هم متن دیگری' }] }

)
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Container, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "colorfull property"

), /*#__PURE__*/
_react.default.createElement(_components.ProductProperties, {
  list: [
  { iconName: 'watch-later', text: 'متن زیبا' },
  { iconName: 'alarm-off', text: 'متن دیگری' },
  { iconName: 'aspect-ratio', text: 'و باز هم متن دیگری' }],

  color: "default" }
), /*#__PURE__*/
_react.default.createElement("hr", null), /*#__PURE__*/
_react.default.createElement(_components.ProductProperties, {
  list: [
  { iconName: 'watch-later', text: 'متن زیبا' },
  { iconName: 'alarm-off', text: 'متن دیگری' },
  { iconName: 'aspect-ratio', text: 'و باز هم متن دیگری' }],

  color: "darkBlue" }
)
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Container, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "horizontal property"

), /*#__PURE__*/
_react.default.createElement(_components.ProductProperties, {
  isHorizontal: true,
  list: [
  { iconName: 'watch-later', text: 'متن زیبا' },
  { iconName: 'alarm-off', text: 'متن دیگری' },
  { iconName: 'aspect-ratio', text: 'و باز هم متن دیگری' }] }

)
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(Heading, { level: 2 }, "product-owner"

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(Container, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 3 }, "product-owner"

), /*#__PURE__*/
_react.default.createElement(_components.ProductOwner, {
  name: "\u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC \u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC",

  onClickFollowMe: () => {
    window.console.log('Follow Me Button Clicked, and it will return true or false randomly');
    return false;
  },
  onClickConnectUs: () => {window.console.log('Connect Us Button Clicked');},
  renderDescriptionLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element),
  renderTitledAvatarLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewhere" }, element) }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_components.ProductOwner, {
  name: "\u062F\u0648\u0645\u06CC",
  onClickFollowMe: () => {
    window.console.log('Follow Me Button Clicked, and it will return true or false randomly');
    return new Promise(
      (resolve) => {
        setTimeout(() => resolve(!Math.floor(Math.random() * 2)), 3000);
      }
    );
  },
  onClickConnectUs: () => {window.console.log('Connect Us Button Clicked');} }
), /*#__PURE__*/
_react.default.createElement("br", null)
), /*#__PURE__*/
_react.default.createElement("br", null)

);var _default = exports.default =


ProductPage;