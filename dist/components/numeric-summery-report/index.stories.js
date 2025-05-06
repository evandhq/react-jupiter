"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithColor = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/NumericSummeryReport',
  component: _index.default,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the report'
    },
    value: {
      control: 'number',
      description: 'Numeric value to display'
    },
    textColor: {
      control: 'color',
      description: 'Color of the text'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  title: 'Total Users',
  value: 1234,
  textColor: '#000000'
};

const WithColor = exports.WithColor = Template.bind({});
WithColor.args = {
  title: 'Active Users',
  value: 567,
  textColor: '#2196F3'
};