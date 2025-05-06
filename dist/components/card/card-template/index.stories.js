"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithLink = exports.WithBackground = exports.VerticalDirection = exports.Level5 = exports.Level4 = exports.Level3 = exports.Level2 = exports.HoverLevel1To4 = exports.HorizontalDirection = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/Card/CardTemplate',
  component: _index.default,
  argTypes: {
    level: {
      control: 'number',
      description: 'The level of the card (1-5)'
    },
    hoverToLevel: {
      control: 'number',
      description: 'The level to hover to'
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The direction of the card content'
    },
    background: {
      control: 'text',
      description: 'The background image URL'
    },
    renderLink: {
      control: 'function',
      description: 'Function to render a link wrapper'
    },
    style: {
      control: 'object',
      description: 'Additional styles to apply'
    },
    children: {
      control: 'text',
      description: 'The content of the card'
    }
  }
};

const Template = (args) => /*#__PURE__*/
_react.default.createElement(_index.default, args, /*#__PURE__*/
_react.default.createElement("div", { style: { height: '100px' } }, "Hello card template.")
);


const Default = exports.Default = Template.bind({});

const Level2 = exports.Level2 = Template.bind({});
Level2.args = {
  level: 2,
  style: { marginTop: '50px' }
};

const Level3 = exports.Level3 = Template.bind({});
Level3.args = {
  level: 3,
  style: { marginTop: '50px' }
};

const Level4 = exports.Level4 = Template.bind({});
Level4.args = {
  level: 4,
  style: { marginTop: '50px' }
};

const Level5 = exports.Level5 = Template.bind({});
Level5.args = {
  level: 5,
  style: { marginTop: '50px' }
};

const HoverLevel1To4 = exports.HoverLevel1To4 = Template.bind({});
HoverLevel1To4.args = {
  level: 1,
  hoverToLevel: 4,
  style: { marginTop: '50px' }
};

const WithLink = exports.WithLink = Template.bind({});
WithLink.args = {
  renderLink: (el) => /*#__PURE__*/_react.default.createElement("a", { href: "http://google.com" }, el),
  children: /*#__PURE__*/_react.default.createElement("div", { style: { height: '100px' } }, "with link to google")
};

const VerticalDirection = exports.VerticalDirection = Template.bind({});
VerticalDirection.args = {
  direction: 'vertical',
  children: /*#__PURE__*/
  _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
  _react.default.createElement("div", { style: { height: '100px', backgroundColor: 'lightgray' } }, "Hello card template."), /*#__PURE__*/
  _react.default.createElement("div", { style: { height: '100px', backgroundColor: 'oldlace' } }, "Hello card template.")
  )

};

const HorizontalDirection = exports.HorizontalDirection = Template.bind({});
HorizontalDirection.args = {
  direction: 'horizontal',
  children: /*#__PURE__*/
  _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
  _react.default.createElement("div", { style: { height: '100px', backgroundColor: 'lightgray' } }, "Hello card template."), /*#__PURE__*/
  _react.default.createElement("div", { style: { height: '100px', backgroundColor: 'oldlace' } }, "Hello card template.")
  )

};

const WithBackground = exports.WithBackground = Template.bind({});
WithBackground.args = {
  background: 'http://static.simpledesktops.com/uploads/desktops/2019/11/08/Jupiter.png'
};