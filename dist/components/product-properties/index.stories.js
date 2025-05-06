"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Horizontal = exports.Default = exports.CustomColors = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/ProductProperties',
  component: _index.default,
  argTypes: {
    list: {
      control: 'object',
      description: 'Array of property items ({ iconName, text, link })'
    },
    isHorizontal: {
      control: 'boolean',
      description: 'Display properties horizontally'
    },
    color: {
      control: 'select',
      options: ['gray', 'darkBlue', 'black', 'default'],
      description: 'Text color'
    },
    iconColor: {
      control: 'select',
      options: ['gray', 'darkBlue', 'black', 'default'],
      description: 'Icon color'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  list: [
  { iconName: 'category', text: 'Electronics', link: undefined },
  { iconName: 'brand', text: 'Apple', link: undefined },
  { iconName: 'model', text: 'iPhone 13', link: undefined }],

  isHorizontal: false
};

const Horizontal = exports.Horizontal = Template.bind({});
Horizontal.args = {
  ...Default.args,
  isHorizontal: true
};

const CustomColors = exports.CustomColors = Template.bind({});
CustomColors.args = {
  ...Default.args,
  color: 'blue', // Example custom color
  iconColor: 'red' // Example custom icon color
};