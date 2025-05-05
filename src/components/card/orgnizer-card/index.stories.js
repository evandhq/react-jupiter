import React from 'react';

import OrgnizerCard from './index';

export default {
  title: 'OrganizerCard',
  component: OrgnizerCard,
  
  argTypes: {
    name: {
      control: 'text',
      defaultValue: 'وزارت آموزش و پرورش',
    },
    followersCount: {
      control: 'text',
      defaultValue: '۱۳۲۴۷',
    },
    logo: {
      control: 'text',
      defaultValue: 'https://i.pravatar.cc/300?img=13',
    },
    activeEventsCount: {
      control: 'text',
      defaultValue: '۱۲۳',
    },
    allEventsCount: {
      control: 'text',
      defaultValue: '۲۴۵۶۷',
    },
    recommendedCount: {
      control: 'text',
      defaultValue: '۳۳ نفر',
    },
    isFollowed: {
      control: 'boolean',
      defaultValue: false,
    },
    partnership: {
      control: 'select',
      options: ['colleague', 'partner', 'sponsor'],
      defaultValue: 'colleague',
    },
  },
};

const Template = (args) => (
  <OrgnizerCard
    {...args}
    renderOrganizerLink={(el) => (<a href="https://i.pravatar.cc/300?img=1">{el}</a>)}
  />
);

export const Default = Template.bind({});
Default.args = {
  name: 'وزارت آموزش و پرورش',
  followersCount: '۱۳۲۴۷',
  logo: 'https://i.pravatar.cc/300?img=13',
  activeEventsCount: '۱۲۳',
  allEventsCount: '۲۴۵۶۷',
  recommendedCount: '۳۳ نفر',
  isFollowed: false,
  partnership: 'colleague',
};

export const Partner = Template.bind({});
Partner.args = {
  ...Default.args,
  partnership: 'partner',
};

export const Sponsor = Template.bind({});
Sponsor.args = {
  ...Default.args,
  partnership: 'sponsor',
};

export const Followed = Template.bind({});
Followed.args = {
  ...Default.args,
  isFollowed: true,
};
