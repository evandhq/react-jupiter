"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.ThirdTabDefault = exports.SecondTabDefault = exports.FourthTabDefault = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _index = require("./index");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Tabs',
  component: _index.Tabs,

  argTypes: {
    defaultTab: {
      control: 'select',
      options: ['firstTab', 'secTab', 'thirsdTab', 'the4thTab'],
      defaultValue: 'firstTab'
    },
    onChange: {
      action: 'onChange'
    }
  }
};

const Template = (args) => /*#__PURE__*/
_react.default.createElement(_index.Tabs, args, /*#__PURE__*/
_react.default.createElement(_index.TabPanel, { label: "\u062A\u0628 \u0627\u0648\u0644", tabKey: "firstTab" }, "this is 1th panel data"

), /*#__PURE__*/
_react.default.createElement(_index.TabPanel, { label: "\u062A\u0628 \u062F\u0648\u0645 \u0627\u06CC\u0646\u062C\u0627", tabKey: "secTab" }, "this is 2nd panel data"

), /*#__PURE__*/
_react.default.createElement(_index.TabPanel, { label: "\u062A\u0628 \u0633\u0648\u0645 \u0637\u0648\u0644\u0627\u0646\u06CC \u0627\u0633\u062A", tabKey: "thirsdTab" }, "this is 3th panel data"

), /*#__PURE__*/
_react.default.createElement(_index.TabPanel, { label: "\u062A\u0628 \u0628\u0639\u062F\u06CC \u062E\u06CC\u0644\u06CC \u062E\u06CC\u0644\u06CC \u062E\u06CC\u0644\u06CC \u062E\u06CC\u0644\u06CC \u0637\u0648\u0644\u0627\u0646\u06CC \u0627\u0633\u062A", tabKey: "the4thTab" }, "this is \u06F4th panel data"

)
);


const Default = exports.Default = Template.bind({});
Default.args = {
  defaultTab: 'firstTab',
  onChange: (0, _addonActions.action)('optional onChange function, triggers what you want to do in onChange tab (it has new tabKey as input argument)')
};

const SecondTabDefault = exports.SecondTabDefault = Template.bind({});
SecondTabDefault.args = {
  ...Default.args,
  defaultTab: 'secTab'
};

const ThirdTabDefault = exports.ThirdTabDefault = Template.bind({});
ThirdTabDefault.args = {
  ...Default.args,
  defaultTab: 'thirsdTab'
};

const FourthTabDefault = exports.FourthTabDefault = Template.bind({});
FourthTabDefault.args = {
  ...Default.args,
  defaultTab: 'the4thTab'
};