"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Default = exports.CustomStyle = exports.CustomFormat = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/ShowDate',
  component: _index.default,
  argTypes: {
    date: {
      control: 'date',
      description: 'Date to display'
    },
    format: {
      control: 'text',
      description: 'Date format string'
    },
    fontSize: {
      control: 'number',
      description: 'Font size in pixels'
    },
    color: {
      control: 'color',
      description: 'Text color'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  date: new Date('2024-03-10'),
  format: 'YYYY-MM-DD',
  fontSize: 16,
  color: '#000000'
};

const CustomFormat = exports.CustomFormat = Template.bind({});
CustomFormat.args = {
  date: new Date('2024-03-10'),
  format: 'MMM DD, YYYY',
  fontSize: 16,
  color: '#000000'
};

const CustomStyle = exports.CustomStyle = Template.bind({});
CustomStyle.args = {
  date: new Date('2024-03-10'),
  format: 'YYYY-MM-DD',
  fontSize: 24,
  color: '#2196F3'
};