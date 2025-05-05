import React from 'react';
import Avatar from './index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    avatar: {
      control: 'text',
      description: 'URL of the avatar image',
    },
    size: {
      control: 'text',
      description: 'Size of the avatar',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Whether to show a tooltip on hover',
    },
    tooltipText: {
      control: 'text',
      description: 'Text to display in the tooltip',
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatar: 'https://via.placeholder.com/40',
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  avatar: 'https://via.placeholder.com/40',
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  avatar: 'https://via.placeholder.com/60',
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  avatar: 'https://via.placeholder.com/80',
  size: "lg",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  avatar: 'https://via.placeholder.com/40',
  size: "md",
  showTooltip: true,
  tooltipText: 'User Avatar',
};
