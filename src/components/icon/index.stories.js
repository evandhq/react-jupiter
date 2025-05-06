import React from 'react';
import { action } from '@storybook/addon-actions';
import Icon from './index';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the icon to display',
    },
    size: {
      control: 'select',
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'],
      description: 'Size of the icon',
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'academic-cap',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  name: 'academic-cap',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  name: 'academic-cap',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  name: 'academic-cap',
  size: 'lg',
};
