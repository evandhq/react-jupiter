"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Small = exports.Medium = exports.Linked = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/TitledAvatar',
  component: _index.default,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text to display'
    },
    avatar: {
      control: 'text',
      description: 'URL of the avatar image'
    },
    avatarSize: {
      control: 'text',
      description: 'Size of the avatar in pixels'
    },
    titleSize: {
      control: 'number',
      description: 'Font size of the title in pixels'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Small = exports.Small = Template.bind({});
Small.args = {
  title: 'John Doe',
  avatar: 'https://placehold.co/100',
  avatarSize: "sm",
  titleSize: 10
};

const Medium = exports.Medium = Template.bind({});
Medium.args = {
  title: 'Jane Smith',
  avatar: 'https://placehold.co/100',
  avatarSize: "md",
  titleSize: 20
};

const Linked = exports.Linked = Template.bind({});
Linked.args = {
  title: 'Bob Johnson',
  avatar: 'https://placehold.co/100',
  avatarSize: 80,
  titleSize: 18,
  renderAvatarLink: /*#__PURE__*/_react.default.createElement("a", { href: "/profile" }, "Profile")
};