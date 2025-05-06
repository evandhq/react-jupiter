"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithTooltip = exports.Small = exports.Medium = exports.Large = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/Avatar',
  component: _index.default,
  argTypes: {
    avatar: {
      control: 'text',
      description: 'URL of the avatar image'
    },
    size: {
      control: 'text',
      description: 'Size of the avatar'
    },
    showTooltip: {
      control: 'boolean',
      description: 'Whether to show a tooltip on hover'
    },
    tooltipText: {
      control: 'text',
      description: 'Text to display in the tooltip'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  avatar: 'https://via.placeholder.com/40',
  size: "md"
};

const Small = exports.Small = Template.bind({});
Small.args = {
  avatar: 'https://via.placeholder.com/40',
  size: "sm"
};

const Medium = exports.Medium = Template.bind({});
Medium.args = {
  avatar: 'https://via.placeholder.com/60',
  size: "md"
};

const Large = exports.Large = Template.bind({});
Large.args = {
  avatar: 'https://via.placeholder.com/80',
  size: "lg"
};

const WithTooltip = exports.WithTooltip = Template.bind({});
WithTooltip.args = {
  avatar: 'https://via.placeholder.com/40',
  size: "md",
  showTooltip: true,
  tooltipText: 'User Avatar'
};