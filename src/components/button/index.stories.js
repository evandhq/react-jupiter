import React from 'react';
import Button from './index';
// import '../storybook.css';
import { Text } from '../typography';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xs'],
      defaultValue: 'md',
    },
    icon: {
      control: 'select',
      options: ['warning', 'arrow-down-on-square', 'bell-alert', 'help'],
      defaultValue: undefined,
    },
    wide: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    styleType: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
    },
    mainColor: {
      control: 'select',
      options: ['red', 'blue', 'green', 'yellow', 'darkBlue', 'gray'],
      defaultValue: 'blue',
    },
    children: {
      control: 'text',
      defaultValue: 'متن زیبای داخل دکمه',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  styleType: 'primary',
  mainColor: 'blue',
  children: 'متن زیبای داخل دکمه',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'watch-later',
  children: 'دکمه‌ با آیکون',
};

export const WithSpecificWidth = Template.bind({});
WithSpecificWidth.args = {
  icon: 'watch-later',
  width: '184px',
  children: 'دکمه‌ با آیکون',
};

export const WideButton = Template.bind({});
WideButton.args = {
  wide: true,
  children: 'دکمه‌ی تمام عرض',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
  children: 'دکمه‌ی خیلی کوچک',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'دکمه‌ی کوچک',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  children: 'دکمه‌ی متوسط',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'دکمه‌ی بزرگ',
};

export const ExtraSmallWithIcon = Template.bind({});
ExtraSmallWithIcon.args = {
  size: 'xs',
  icon: 'watch-later',
  children: 'دکمه‌ی خیلی کوچک با آیکون',
};

export const SmallWithIcon = Template.bind({});
SmallWithIcon.args = {
  size: 'sm',
  icon: 'watch-later',
  children: 'دکمه‌ی کوچک با آیکون',
};

export const MediumWithIcon = Template.bind({});
MediumWithIcon.args = {
  size: 'md',
  icon: 'watch-later',
  children: 'دکمه‌ی متوسط با آیکون',
};

export const LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
  size: 'lg',
  icon: 'watch-later',
  children: 'دکمه‌ی بزرگ با آیکون',
};

export const Primary = Template.bind({});
Primary.args = {
  styleType: 'primary',
  children: 'دکمه‌ی دیفالت اولیه',
};

export const Secondary = Template.bind({});
Secondary.args = {
  styleType: 'secondary',
  children: 'دکمه‌ی دیفالت ثانویه',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  styleType: 'tertiary',
  children: 'دکمه‌ی دیفالت ثالثیه',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  disabled: true,
  children: 'دکمه‌ی دیفالت غیر فعال',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  styleType: 'secondary',
  disabled: true,
  children: 'دکمه‌ی دیفالت ثانویه غیر فعال',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  styleType: 'tertiary',
  disabled: true,
  children: 'دکمه‌ی دیفالت ثالثیه غیر فعال',
};

export const RedPrimary = Template.bind({});
RedPrimary.args = {
  styleType: 'primary',
  mainColor: 'red',
  children: 'دکمه‌ی قرمز اولیه',
};

export const RedSecondary = Template.bind({});
RedSecondary.args = {
  styleType: 'secondary',
  mainColor: 'red',
  children: 'دکمه‌ی قرمز ثانویه',
};

export const RedPrimaryDisabled = Template.bind({});
RedPrimaryDisabled.args = {
  mainColor: 'red',
  disabled: true,
  children: 'دکمه‌ی قرمز اولیه غیر فعال',
};

export const RedSecondaryDisabled = Template.bind({});
RedSecondaryDisabled.args = {
  styleType: 'secondary',
  mainColor: 'red',
  disabled: true,
  children: 'دکمه‌ی قرمز ثانویه غیر فعال',
};

export const BluePrimary = Template.bind({});
BluePrimary.args = {
  styleType: 'primary',
  mainColor: 'blue',
  children: 'دکمه‌ی آبی اولیه',
};

export const BlueSecondary = Template.bind({});
BlueSecondary.args = {
  styleType: 'secondary',
  mainColor: 'blue',
  children: 'دکمه‌ی آبی ثانویه',
};

export const BluePrimaryDisabled = Template.bind({});
BluePrimaryDisabled.args = {
  mainColor: 'blue',
  disabled: true,
  children: 'دکمه‌ی آبی اولیه غیر فعال',
};

export const BlueSecondaryDisabled = Template.bind({});
BlueSecondaryDisabled.args = {
  styleType: 'secondary',
  mainColor: 'blue',
  disabled: true,
  children: 'دکمه‌ی آبیه ثانویه غیر فعال',
};

export const GrayPrimary = Template.bind({});
GrayPrimary.args = {
  styleType: 'primary',
  mainColor: 'gray',
  icon: 'watch-later',
  children: 'دکمه‌ی خاکستری اولیه',
};

export const GreenPrimary = Template.bind({});
GreenPrimary.args = {
  styleType: 'primary',
  mainColor: 'green',
  children: 'دکمه‌ی سبز اولیه',
};

export const GreenSecondary = Template.bind({});
GreenSecondary.args = {
  styleType: 'secondary',
  mainColor: 'green',
  children: 'دکمه‌ی سبز ثانویه',
};

export const GreenPrimaryDisabled = Template.bind({});
GreenPrimaryDisabled.args = {
  mainColor: 'green',
  disabled: true,
  children: 'دکمه‌ی سبز اولیه غیر فعال',
};

export const GreenSecondaryDisabled = Template.bind({});
GreenSecondaryDisabled.args = {
  styleType: 'secondary',
  mainColor: 'green',
  disabled: true,
  children: 'دکمه‌ی سبز ثانویه غیر فعال',
};

export const YellowPrimary = Template.bind({});
YellowPrimary.args = {
  styleType: 'primary',
  mainColor: 'yellow',
  children: 'دکمه‌ی زرد اولیه',
};

export const YellowSecondary = Template.bind({});
YellowSecondary.args = {
  styleType: 'secondary',
  mainColor: 'yellow',
  children: 'دکمه‌ی زرد ثانویه',
};

export const YellowPrimaryDisabled = Template.bind({});
YellowPrimaryDisabled.args = {
  mainColor: 'yellow',
  disabled: true,
  children: 'دکمه‌ی زرد اولیه غیر فعال',
};

export const YellowSecondaryDisabled = Template.bind({});
YellowSecondaryDisabled.args = {
  styleType: 'secondary',
  mainColor: 'yellow',
  disabled: true,
  children: 'دکمه‌ی زرد ثانویه غیر فعال',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  renderLink: (element) => <a href="http://google.com">{element}</a>,
  children: 'لینک به گوگل',
};

export const ExternalLinkButton = Template.bind({});
ExternalLinkButton.args = {
  linkTo: 'http://google.com',
  children: 'لینک به گوگل',
};

export const WithReactNodeChildren = Template.bind({});
WithReactNodeChildren.args = {
  size: 'md',
  children: <Text color="white">این یک متن  تستی است</Text>,
};
