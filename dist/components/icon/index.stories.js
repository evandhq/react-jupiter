"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Small = exports.Medium = exports.Large = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/Icon',
  component: _index.default,
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the icon to display'
    },
    size: {
      control: 'select',
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'],
      description: 'Size of the icon'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  name: 'academic-cap',
  size: 'md'
};

const Small = exports.Small = Template.bind({});
Small.args = {
  name: 'academic-cap',
  size: 'sm'
};

const Medium = exports.Medium = Template.bind({});
Medium.args = {
  name: 'academic-cap',
  size: 'md'
};

const Large = exports.Large = Template.bind({});
Large.args = {
  name: 'academic-cap',
  size: 'lg'
};