import React from 'react';
import OrganizationCard from './index';

export default {
  title: 'Components/OrganizationCard',
  component: OrganizationCard,
  argTypes: {
    name: {
      control: 'text',
      description: 'The organization name',
    },
    logo: {
      control: 'text',
      description: 'The organization logo URL',
    },
    cover: {
      control: 'text',
      description: 'The organization cover image URL',
    },
    renderLink: {
      control: 'function',
      description: 'Function to render a link wrapper',
    },
    report: {
      control: 'object',
      description: 'The organization statistics',
    },
    onClickFollow: {
      action: 'clicked',
      description: 'Callback when follow button is clicked',
    },
  },
};

const Template = (args) => <OrganizationCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Organization Name',
  logo: 'https://via.placeholder.com/80',
  cover: 'https://via.placeholder.com/300x100',
  renderLink: (el) => <a href="/org-profile">{el}</a>,
  report: {
    heldEventsNumber: 2,
    activeEventsNumber: 17,
    followingNumber: 148,
  },
  onClickFollow: () => { window.console.log('click on follow'); },
};
