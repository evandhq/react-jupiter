"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
require("../playground.css");
var _button = require("../components/button");
var _text = require("../components/typography/text");
var _heading = require("../components/typography/heading");
var _link = require("../components/typography/link");
var _avatar = require("../components/avatar");
var _accordion = require("../components/accordion");
var _table = require("../components/table");
var _titledAvatar = require("../components/titled-avatar");
var _showDate = require("../components/show-date");
var _productMenu = require("../components/product-menu");
var _productProperties = require("../components/product-properties");
var _progressBar = require("../components/progress-bar");
var _numericSummeryReport = require("../components/numeric-summery-report");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const PlaygroundContainer = _styledComponents.default.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = _styledComponents.default.section`
  margin-bottom: 3rem;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: white;
`;

const SectionTitle = (0, _styledComponents.default)(_heading.Heading)`
  margin-bottom: 1.5rem;
  color: #333;
`;

const Playground = () => {
  return (/*#__PURE__*/
    _react.default.createElement(PlaygroundContainer, null, /*#__PURE__*/
    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Typography"), /*#__PURE__*/
    _react.default.createElement(_heading.Heading, { level: 1 }, "Heading 1"), /*#__PURE__*/
    _react.default.createElement(_heading.Heading, { level: 2 }, "Heading 2"), /*#__PURE__*/
    _react.default.createElement(_heading.Heading, { level: 3 }, "Heading 3"), /*#__PURE__*/
    _react.default.createElement(_text.Text, null, "Regular text"), /*#__PURE__*/
    _react.default.createElement(_text.Text, { color: "blue" }, "Blue text"), /*#__PURE__*/
    _react.default.createElement(_text.Text, { color: "red" }, "Red text"), /*#__PURE__*/
    _react.default.createElement(_link.Link, { href: "https://example.com" }, "Example Link")
    ), /*#__PURE__*/

    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Buttons"), /*#__PURE__*/
    _react.default.createElement(_button.Button, null, "Default Button"), /*#__PURE__*/
    _react.default.createElement(_button.Button, { styleType: "secondary" }, "Secondary Button"), /*#__PURE__*/
    _react.default.createElement(_button.Button, { styleType: "tertiary" }, "Tertiary Button")
    ), /*#__PURE__*/

    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Avatars"), /*#__PURE__*/
    _react.default.createElement(_avatar.Avatar, { src: "https://via.placeholder.com/150", size: "sm" }), /*#__PURE__*/
    _react.default.createElement(_avatar.Avatar, { src: "https://via.placeholder.com/150", size: "md" }), /*#__PURE__*/
    _react.default.createElement(_avatar.Avatar, { src: "https://via.placeholder.com/150", size: "lg" })
    ), /*#__PURE__*/

    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Titled Avatar"), /*#__PURE__*/
    _react.default.createElement(_titledAvatar.TitledAvatar, {
      title: "John Doe",
      avatar: "https://via.placeholder.com/40",
      avatarSize: 40,
      titleSize: 14 }
    )
    ), /*#__PURE__*/

    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Progress Bar"), /*#__PURE__*/
    _react.default.createElement(_progressBar.ProgressBar, { progress: 50, color: "#2196F3", height: 8 })
    ), /*#__PURE__*/

    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Numeric Summary Report"), /*#__PURE__*/
    _react.default.createElement(_numericSummeryReport.NumericSummeryReport, {
      title: "Total Users",
      value: 1234,
      textColor: "#000000" }
    )
    ), /*#__PURE__*/

    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Product Menu"), /*#__PURE__*/
    _react.default.createElement(_productMenu.ProductMenu, {
      items: [
      { id: 1, label: 'Dashboard', icon: 'home' },
      { id: 2, label: 'Profile', icon: 'user' },
      { id: 3, label: 'Settings', icon: 'settings' }],

      onItemClick: (id) => console.log('Clicked:', id) }
    )
    ), /*#__PURE__*/

    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Product Properties"), /*#__PURE__*/
    _react.default.createElement(_productProperties.ProductProperties, {
      properties: [
      { id: 1, label: 'Category', value: 'Electronics', icon: 'category' },
      { id: 2, label: 'Brand', value: 'Apple', icon: 'brand' },
      { id: 3, label: 'Model', value: 'iPhone 13', icon: 'model' }],

      isHorizontal: false,
      color: "#000000",
      iconColor: "#666666" }
    )
    ), /*#__PURE__*/

    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Show Date"), /*#__PURE__*/
    _react.default.createElement(_showDate.ShowDate, {
      date: new Date(),
      format: "YYYY-MM-DD",
      fontSize: 16,
      color: "#000000" }
    )
    ), /*#__PURE__*/

    _react.default.createElement(Section, null, /*#__PURE__*/
    _react.default.createElement(SectionTitle, { level: 2 }, "Table"), /*#__PURE__*/
    _react.default.createElement(_table.Table, {
      columns: [
      { id: 'name', label: 'Name' },
      { id: 'age', label: 'Age' },
      { id: 'city', label: 'City' }],

      data: [
      { id: 1, name: 'John Doe', age: 30, city: 'New York' },
      { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
      { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' }] }

    )
    )
    ));

};var _default = exports.default =

Playground;