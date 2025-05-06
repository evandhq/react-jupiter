"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithCustomColorItem = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _menu = _interopRequireDefault(require("./menu"));
var _menuItem = _interopRequireDefault(require("./menu-item"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/ProductMenu',
  component: _menu.default,
  argTypes: {
  }
};

const Template = (args) => /*#__PURE__*/
_react.default.createElement(_menu.default, args, /*#__PURE__*/
_react.default.createElement(_menuItem.default, { label: "Dashboard", handleClick: (0, _addonActions.action)('dashboard-clicked') }), /*#__PURE__*/
_react.default.createElement(_menuItem.default, { label: "Profile", handleClick: (0, _addonActions.action)('profile-clicked') }), /*#__PURE__*/
_react.default.createElement(_menuItem.default, { label: "Settings", handleClick: (0, _addonActions.action)('settings-clicked') })
);


const Default = exports.Default = Template.bind({});
Default.args = {
};

const WithCustomColorItem = (args) => /*#__PURE__*/
_react.default.createElement(_menu.default, args, /*#__PURE__*/
_react.default.createElement(_menuItem.default, { label: "Dashboard", handleClick: (0, _addonActions.action)('dashboard-clicked'), color: "blue" }), /*#__PURE__*/
_react.default.createElement(_menuItem.default, { label: "Profile", handleClick: (0, _addonActions.action)('profile-clicked') }), /*#__PURE__*/
_react.default.createElement(_menuItem.default, { label: "Settings", handleClick: (0, _addonActions.action)('settings-clicked') })
);exports.WithCustomColorItem = WithCustomColorItem;

WithCustomColorItem.args = {
};