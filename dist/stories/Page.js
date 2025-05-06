"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Page = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Page = (_ref) => {let { user, onLogin, onLogout, onCreateAccount } = _ref;return (/*#__PURE__*/
    _react.default.createElement("article", { className: "font-sans" }, /*#__PURE__*/
    _react.default.createElement("section", { className: "w-full max-w-screen-xl mx-auto py-12 px-6" }, /*#__PURE__*/
    _react.default.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Pages in Storybook"), /*#__PURE__*/
    _react.default.createElement("p", { className: "text-gray-700 mb-4" }, "We recommend building UIs with a",
    ' ', /*#__PURE__*/
    _react.default.createElement("a", {
      href: "https://componentdriven.org",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-blue-600 hover:underline" }, /*#__PURE__*/

    _react.default.createElement("strong", null, "component-driven")
    ), ' ', "process starting with atomic components and ending with pages."

    ), /*#__PURE__*/
    _react.default.createElement("p", { className: "text-gray-700 mb-4" }, "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"



    ), /*#__PURE__*/
    _react.default.createElement("ul", { className: "list-disc pl-6 mb-4 text-gray-700" }, /*#__PURE__*/
    _react.default.createElement("li", null, "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"
    ), /*#__PURE__*/
    _react.default.createElement("li", null, "Assemble data in the page component from your services. You can mock these services out using Storybook."
    )
    ), /*#__PURE__*/
    _react.default.createElement("p", { className: "text-gray-700 mb-4" }, "Get a guided tutorial on component-driven development at",
    ' ', /*#__PURE__*/
    _react.default.createElement("a", {
      href: "https://storybook.js.org/tutorials/",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-blue-600 hover:underline" },
    "Storybook tutorials"

    ), ". Read more in the",
    ' ', /*#__PURE__*/
    _react.default.createElement("a", {
      href: "https://storybook.js.org/docs",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-blue-600 hover:underline" },
    "docs"

    ), "."

    )
    )
    ));};exports.Page = Page;


Page.propTypes = {
  user: _propTypes.default.shape({
    name: _propTypes.default.string.isRequired
  }),
  onLogin: _propTypes.default.func.isRequired,
  onLogout: _propTypes.default.func.isRequired,
  onCreateAccount: _propTypes.default.func.isRequired
};

Page.defaultProps = {
  user: null
};