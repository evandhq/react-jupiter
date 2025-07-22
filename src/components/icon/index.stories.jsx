import React from 'react';
import { action } from '@storybook/addon-actions';
import Icon from './index';

const colorOptions = [
  'white',
  'black',
  'gray',
  'darkGray',
  'darkBlue',
  'red',
  'green',
  'yellow',
  'blue',
  'custom',
  '',
];

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the keen icon to display',
    },
    variant: {
      control: 'select',
      options: ['duotone', 'filled', 'solid', 'outline'],
      description: 'Style of the keen icon',
    },
    size: {
      control: 'select',
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', 12, 16, 20, 24, 32, 40],
      description: 'Size of the icon',
    },
    color: {
      control: 'select',
      options: colorOptions,
      description: 'Color of the icon (select \'custom\' to use a custom color)',
    },
    customColor: {
      control: 'color',
      description: 'Custom color (used only if color is set to custom)',
      if: { arg: 'color', eq: 'custom' },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

const Template = (args) => {
  const { color, customColor, ...rest } = args;
  const appliedColor = color === 'custom' ? customColor : color;
  return <Icon {...rest} color={appliedColor} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'refresh',
  variant: 'filled',
  size: 'md',
  color: '',
  customColor: '#000000',
  className: '',
};

export const Duotone = Template.bind({});
Duotone.args = {
  name: 'refresh',
  variant: 'duotone',
  size: 'md',
  color: '',
  customColor: '#000000',
  className: '',
};

export const Outline = Template.bind({});
Outline.args = {
  name: 'refresh',
  variant: 'outline',
  size: 'md',
  color: '',
  customColor: '#000000',
  className: '',
};

export const Solid = Template.bind({});
Solid.args = {
  name: 'refresh',
  variant: 'solid',
  size: 'md',
  color: '',
  customColor: '#000000',
  className: '',
};
