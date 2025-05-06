"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithRenderProps = exports.Small = exports.Simple = exports.Emphasized = exports.Bold = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/Typography/Link',
  component: _index.default,
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL or render function for the link'
    },
    size: {
      control: 'number',
      description: 'The font size of the link'
    },
    strong: {
      control: 'boolean',
      description: 'Whether the link text should be bold'
    },
    emphasized: {
      control: 'boolean',
      description: 'Whether the link text should be emphasized'
    },
    linkContent: {
      control: 'text',
      description: 'The content of the link when using renderProps'
    },
    children: {
      control: 'text',
      description: 'The content of the link'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Simple = exports.Simple = Template.bind({});
Simple.args = {
  href: 'http://www.google.com',
  children: 'ورود به سایت گوگل'
};

const Small = exports.Small = Template.bind({});
Small.args = {
  href: 'http://www.google.com',
  size: 12,
  children: 'لینک با سایز کوچکتر'
};

const Bold = exports.Bold = Template.bind({});
Bold.args = {
  href: 'http://www.google.com',
  size: 12,
  strong: true,
  children: 'لینک با متن بولد'
};

const Emphasized = exports.Emphasized = Template.bind({});
Emphasized.args = {
  href: 'http://www.google.com',
  size: 12,
  emphasized: true,
  children: 'لینک با متن کچ'
};

const WithRenderProps = exports.WithRenderProps = Template.bind({});
WithRenderProps.args = {
  href: (el) => /*#__PURE__*/_react.default.createElement("a", { href: "http://yahoo.com" }, el),
  linkContent: 'لینک با رندر پراپس'
};