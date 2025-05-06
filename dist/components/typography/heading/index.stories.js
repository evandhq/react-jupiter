"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.CustomSize = exports.CustomColor = void 0;var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/Typography/Heading',
  component: _index.default,
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (h1-h6)'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the heading'
    },
    color: {
      control: 'color',
      description: 'Color of the heading text'
    },
    children: {
      control: 'text',
      description: 'Heading content'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const H1 = exports.H1 = Template.bind({});
H1.args = {
  level: 1,
  size: 'large',
  color: '#000000',
  children: 'Heading 1'
};

const H2 = exports.H2 = Template.bind({});
H2.args = {
  level: 2,
  size: 'medium',
  color: '#000000',
  children: 'Heading 2'
};

const H3 = exports.H3 = Template.bind({});
H3.args = {
  level: 3,
  size: 'medium',
  color: '#000000',
  children: 'Heading 3'
};

const H4 = exports.H4 = Template.bind({});
H4.args = {
  level: 4,
  size: 'small',
  color: '#000000',
  children: 'Heading 4'
};

const H5 = exports.H5 = Template.bind({});
H5.args = {
  level: 5,
  size: 'small',
  color: '#000000',
  children: 'Heading 5'
};

const H6 = exports.H6 = Template.bind({});
H6.args = {
  level: 6,
  size: 'small',
  color: '#000000',
  children: 'Heading 6'
};

const CustomColor = exports.CustomColor = Template.bind({});
CustomColor.args = {
  level: 1,
  size: 'large',
  color: '#2196F3',
  children: 'Blue Heading'
};

const CustomSize = exports.CustomSize = Template.bind({});
CustomSize.args = {
  level: 1,
  size: 'small',
  color: '#000000',
  children: 'Small Heading'
};