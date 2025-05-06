"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/OrganizationCard',
  component: _index.default,
  argTypes: {
    name: {
      control: 'text',
      description: 'The organization name'
    },
    logo: {
      control: 'text',
      description: 'The organization logo URL'
    },
    cover: {
      control: 'text',
      description: 'The organization cover image URL'
    },
    renderLink: {
      control: 'function',
      description: 'Function to render a link wrapper'
    },
    report: {
      control: 'object',
      description: 'The organization statistics'
    },
    onClickFollow: {
      action: 'clicked',
      description: 'Callback when follow button is clicked'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  name: 'Organization Name',
  logo: 'https://via.placeholder.com/80',
  cover: 'https://via.placeholder.com/300x100',
  renderLink: (el) => /*#__PURE__*/_react.default.createElement("a", { href: "/org-profile" }, el),
  report: {
    heldEventsNumber: 2,
    activeEventsNumber: 17,
    followingNumber: 148
  },
  onClickFollow: () => {window.console.log('click on follow');}
};