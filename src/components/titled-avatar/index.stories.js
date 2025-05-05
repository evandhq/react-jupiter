import React from 'react';
import TitledAvatar from './index';

export default {
  title: 'Components/TitledAvatar',
  component: TitledAvatar,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text to display',
    },
    avatar: {
      control: 'text',
      description: 'URL of the avatar image',
    },
    avatarSize: {
      control: 'text',
      description: 'Size of the avatar in pixels',
    },
    titleSize: {
      control: 'number',
      description: 'Font size of the title in pixels',
    },
  },
};

const Template = (args) => <TitledAvatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  title: 'John Doe',
  avatar: 'https://placehold.co/100',
  avatarSize: "sm",
  titleSize: 10,
};

export const Medium = Template.bind({});
Medium.args = {
  title: 'Jane Smith',
  avatar: 'https://placehold.co/100',
  avatarSize: "md",
  titleSize: 20,
};

export const Linked = Template.bind({});
Linked.args = {
  title: 'Bob Johnson',
  avatar: 'https://placehold.co/100',
  avatarSize: 80,
  titleSize: 18,
  renderAvatarLink: <a href="/profile">Profile</a>,
};
