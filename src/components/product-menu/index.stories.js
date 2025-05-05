import React from 'react';
import { action } from '@storybook/addon-actions';
import Menu from './menu';
import MenuItem from './menu-item';

export default {
  title: 'Components/ProductMenu',
  component: Menu,
  argTypes: {
  },
};

const Template = (args) => (
  <Menu {...args}>
    <MenuItem label="Dashboard" handleClick={action('dashboard-clicked')} />
    <MenuItem label="Profile" handleClick={action('profile-clicked')} />
    <MenuItem label="Settings" handleClick={action('settings-clicked')} />
  </Menu>
);

export const Default = Template.bind({});
Default.args = {
};

export const WithCustomColorItem = (args) => (
  <Menu {...args}>
    <MenuItem label="Dashboard" handleClick={action('dashboard-clicked')} color="blue" />
    <MenuItem label="Profile" handleClick={action('profile-clicked')} />
    <MenuItem label="Settings" handleClick={action('settings-clicked')} />
  </Menu>
);
WithCustomColorItem.args = {
};
