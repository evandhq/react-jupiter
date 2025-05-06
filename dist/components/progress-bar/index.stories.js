"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/ProgressBar',
  component: _index.default,
  argTypes: {
    width: {
      control: 'number',
      description: 'Current progress value'
    },
    labels: {
      control: 'array',
      description: 'Labels for different thresholds'
    },
    points: {
      control: 'object',
      description: 'Object containing partner and colleague threshold points'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  width: 50,
  labels: ['Label 1', 'Label 2'],
  points: {
    partner: 75,
    colleague: 100
  }
};