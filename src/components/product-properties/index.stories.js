import React from 'react';
import ProductProperties from './index';

export default {
  title: 'Components/ProductProperties',
  component: ProductProperties,
  argTypes: {
    list: {
      control: 'object',
      description: 'Array of property items ({ iconName, text, link })',
    },
    isHorizontal: {
      control: 'boolean',
      description: 'Display properties horizontally',
    },
    color: {
      control: 'select',
      options: ['gray', 'darkBlue', 'black', 'default'],
      description: 'Text color',
    },
    iconColor: {
      control: 'select',
      options: ['gray', 'darkBlue', 'black', 'default'],
      description: 'Icon color',
    },
  },
};

const Template = (args) => <ProductProperties {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    { iconName: 'category', text: 'Electronics', link: undefined },
    { iconName: 'brand', text: 'Apple', link: undefined },
    { iconName: 'model', text: 'iPhone 13', link: undefined },
  ],
  isHorizontal: false,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Default.args,
  isHorizontal: true,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  ...Default.args,
  color: 'blue', // Example custom color
  iconColor: 'red', // Example custom icon color
};
