import React from 'react';
import { action } from '@storybook/addon-actions';
import Heading from './index';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (h1-h6)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the heading',
    },
    color: {
      control: 'color',
      description: 'Color of the heading text',
    },
    children: {
      control: 'text',
      description: 'Heading content',
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  size: 'large',
  color: '#000000',
  children: 'Heading 1',
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  size: 'medium',
  color: '#000000',
  children: 'Heading 2',
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  size: 'medium',
  color: '#000000',
  children: 'Heading 3',
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
  size: 'small',
  color: '#000000',
  children: 'Heading 4',
};

export const H5 = Template.bind({});
H5.args = {
  level: 5,
  size: 'small',
  color: '#000000',
  children: 'Heading 5',
};

export const H6 = Template.bind({});
H6.args = {
  level: 6,
  size: 'small',
  color: '#000000',
  children: 'Heading 6',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  level: 1,
  size: 'large',
  color: '#2196F3',
  children: 'Blue Heading',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  level: 1,
  size: 'small',
  color: '#000000',
  children: 'Small Heading',
};
