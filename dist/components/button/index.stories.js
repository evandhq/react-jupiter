"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.YellowSecondaryDisabled = exports.YellowSecondary = exports.YellowPrimaryDisabled = exports.YellowPrimary = exports.WithSpecificWidth = exports.WithReactNodeChildren = exports.WithIcon = exports.WideButton = exports.TertiaryDisabled = exports.Tertiary = exports.SmallWithIcon = exports.Small = exports.SecondaryDisabled = exports.Secondary = exports.RedSecondaryDisabled = exports.RedSecondary = exports.RedPrimaryDisabled = exports.RedPrimary = exports.PrimaryDisabled = exports.Primary = exports.MediumWithIcon = exports.Medium = exports.LinkButton = exports.LargeWithIcon = exports.Large = exports.GreenSecondaryDisabled = exports.GreenSecondary = exports.GreenPrimaryDisabled = exports.GreenPrimary = exports.GrayPrimary = exports.ExtraSmallWithIcon = exports.ExtraSmall = exports.ExternalLinkButton = exports.Default = exports.BlueSecondaryDisabled = exports.BlueSecondary = exports.BluePrimaryDisabled = exports.BluePrimary = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));

var _typography = require("../typography");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };} // import '../storybook.css';
var _default = exports.default =
{
  title: 'Button',
  component: _index.default,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xs'],
      defaultValue: 'md'
    },
    icon: {
      control: 'select',
      options: ['warning', 'arrow-down-on-square', 'bell-alert', 'help'],
      defaultValue: undefined
    },
    wide: {
      control: 'boolean',
      defaultValue: false
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    styleType: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary'
    },
    mainColor: {
      control: 'select',
      options: ['red', 'blue', 'green', 'yellow', 'darkBlue', 'gray'],
      defaultValue: 'blue'
    },
    children: {
      control: 'text',
      defaultValue: 'متن زیبای داخل دکمه'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  size: 'md',
  styleType: 'primary',
  mainColor: 'blue',
  children: 'متن زیبای داخل دکمه'
};

const WithIcon = exports.WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'watch-later',
  children: 'دکمه‌ با آیکون'
};

const WithSpecificWidth = exports.WithSpecificWidth = Template.bind({});
WithSpecificWidth.args = {
  icon: 'watch-later',
  width: '184px',
  children: 'دکمه‌ با آیکون'
};

const WideButton = exports.WideButton = Template.bind({});
WideButton.args = {
  wide: true,
  children: 'دکمه‌ی تمام عرض'
};

const ExtraSmall = exports.ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
  children: 'دکمه‌ی خیلی کوچک'
};

const Small = exports.Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'دکمه‌ی کوچک'
};

const Medium = exports.Medium = Template.bind({});
Medium.args = {
  size: 'md',
  children: 'دکمه‌ی متوسط'
};

const Large = exports.Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'دکمه‌ی بزرگ'
};

const ExtraSmallWithIcon = exports.ExtraSmallWithIcon = Template.bind({});
ExtraSmallWithIcon.args = {
  size: 'xs',
  icon: 'watch-later',
  children: 'دکمه‌ی خیلی کوچک با آیکون'
};

const SmallWithIcon = exports.SmallWithIcon = Template.bind({});
SmallWithIcon.args = {
  size: 'sm',
  icon: 'watch-later',
  children: 'دکمه‌ی کوچک با آیکون'
};

const MediumWithIcon = exports.MediumWithIcon = Template.bind({});
MediumWithIcon.args = {
  size: 'md',
  icon: 'watch-later',
  children: 'دکمه‌ی متوسط با آیکون'
};

const LargeWithIcon = exports.LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
  size: 'lg',
  icon: 'watch-later',
  children: 'دکمه‌ی بزرگ با آیکون'
};

const Primary = exports.Primary = Template.bind({});
Primary.args = {
  styleType: 'primary',
  children: 'دکمه‌ی دیفالت اولیه'
};

const Secondary = exports.Secondary = Template.bind({});
Secondary.args = {
  styleType: 'secondary',
  children: 'دکمه‌ی دیفالت ثانویه'
};

const Tertiary = exports.Tertiary = Template.bind({});
Tertiary.args = {
  styleType: 'tertiary',
  children: 'دکمه‌ی دیفالت ثالثیه'
};

const PrimaryDisabled = exports.PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  disabled: true,
  children: 'دکمه‌ی دیفالت غیر فعال'
};

const SecondaryDisabled = exports.SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  styleType: 'secondary',
  disabled: true,
  children: 'دکمه‌ی دیفالت ثانویه غیر فعال'
};

const TertiaryDisabled = exports.TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  styleType: 'tertiary',
  disabled: true,
  children: 'دکمه‌ی دیفالت ثالثیه غیر فعال'
};

const RedPrimary = exports.RedPrimary = Template.bind({});
RedPrimary.args = {
  styleType: 'primary',
  mainColor: 'red',
  children: 'دکمه‌ی قرمز اولیه'
};

const RedSecondary = exports.RedSecondary = Template.bind({});
RedSecondary.args = {
  styleType: 'secondary',
  mainColor: 'red',
  children: 'دکمه‌ی قرمز ثانویه'
};

const RedPrimaryDisabled = exports.RedPrimaryDisabled = Template.bind({});
RedPrimaryDisabled.args = {
  mainColor: 'red',
  disabled: true,
  children: 'دکمه‌ی قرمز اولیه غیر فعال'
};

const RedSecondaryDisabled = exports.RedSecondaryDisabled = Template.bind({});
RedSecondaryDisabled.args = {
  styleType: 'secondary',
  mainColor: 'red',
  disabled: true,
  children: 'دکمه‌ی قرمز ثانویه غیر فعال'
};

const BluePrimary = exports.BluePrimary = Template.bind({});
BluePrimary.args = {
  styleType: 'primary',
  mainColor: 'blue',
  children: 'دکمه‌ی آبی اولیه'
};

const BlueSecondary = exports.BlueSecondary = Template.bind({});
BlueSecondary.args = {
  styleType: 'secondary',
  mainColor: 'blue',
  children: 'دکمه‌ی آبی ثانویه'
};

const BluePrimaryDisabled = exports.BluePrimaryDisabled = Template.bind({});
BluePrimaryDisabled.args = {
  mainColor: 'blue',
  disabled: true,
  children: 'دکمه‌ی آبی اولیه غیر فعال'
};

const BlueSecondaryDisabled = exports.BlueSecondaryDisabled = Template.bind({});
BlueSecondaryDisabled.args = {
  styleType: 'secondary',
  mainColor: 'blue',
  disabled: true,
  children: 'دکمه‌ی آبیه ثانویه غیر فعال'
};

const GrayPrimary = exports.GrayPrimary = Template.bind({});
GrayPrimary.args = {
  styleType: 'primary',
  mainColor: 'gray',
  icon: 'watch-later',
  children: 'دکمه‌ی خاکستری اولیه'
};

const GreenPrimary = exports.GreenPrimary = Template.bind({});
GreenPrimary.args = {
  styleType: 'primary',
  mainColor: 'green',
  children: 'دکمه‌ی سبز اولیه'
};

const GreenSecondary = exports.GreenSecondary = Template.bind({});
GreenSecondary.args = {
  styleType: 'secondary',
  mainColor: 'green',
  children: 'دکمه‌ی سبز ثانویه'
};

const GreenPrimaryDisabled = exports.GreenPrimaryDisabled = Template.bind({});
GreenPrimaryDisabled.args = {
  mainColor: 'green',
  disabled: true,
  children: 'دکمه‌ی سبز اولیه غیر فعال'
};

const GreenSecondaryDisabled = exports.GreenSecondaryDisabled = Template.bind({});
GreenSecondaryDisabled.args = {
  styleType: 'secondary',
  mainColor: 'green',
  disabled: true,
  children: 'دکمه‌ی سبز ثانویه غیر فعال'
};

const YellowPrimary = exports.YellowPrimary = Template.bind({});
YellowPrimary.args = {
  styleType: 'primary',
  mainColor: 'yellow',
  children: 'دکمه‌ی زرد اولیه'
};

const YellowSecondary = exports.YellowSecondary = Template.bind({});
YellowSecondary.args = {
  styleType: 'secondary',
  mainColor: 'yellow',
  children: 'دکمه‌ی زرد ثانویه'
};

const YellowPrimaryDisabled = exports.YellowPrimaryDisabled = Template.bind({});
YellowPrimaryDisabled.args = {
  mainColor: 'yellow',
  disabled: true,
  children: 'دکمه‌ی زرد اولیه غیر فعال'
};

const YellowSecondaryDisabled = exports.YellowSecondaryDisabled = Template.bind({});
YellowSecondaryDisabled.args = {
  styleType: 'secondary',
  mainColor: 'yellow',
  disabled: true,
  children: 'دکمه‌ی زرد ثانویه غیر فعال'
};

const LinkButton = exports.LinkButton = Template.bind({});
LinkButton.args = {
  renderLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "http://google.com" }, element),
  children: 'لینک به گوگل'
};

const ExternalLinkButton = exports.ExternalLinkButton = Template.bind({});
ExternalLinkButton.args = {
  linkTo: 'http://google.com',
  children: 'لینک به گوگل'
};

const WithReactNodeChildren = exports.WithReactNodeChildren = Template.bind({});
WithReactNodeChildren.args = {
  size: 'md',
  children: /*#__PURE__*/_react.default.createElement(_typography.Text, { color: "white" }, "\u0627\u06CC\u0646 \u06CC\u06A9 \u0645\u062A\u0646  \u062A\u0633\u062A\u06CC \u0627\u0633\u062A")
};