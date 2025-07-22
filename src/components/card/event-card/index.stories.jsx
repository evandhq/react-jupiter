import React from 'react';
import EventCard from './index';
// import '../storybook.css';
import { VerticalCover } from './index.style';

const defaultArgs = {
  title: "تایتل یک رویداد نسبتا طولانی در اینجاست که باید و باید و قرار است اضافه بیاید و بزند به بیرون",
  cover: "https://static.evand.net/assets/images/defaults/event-cover.jpg",
  date: "2020-01-10T14:00:00+0330",
  place: "تهران",
  price: "از ۴۴۰۰۰ تومان",
  clickBookmark: () => true,
  queryString: "icn=trendEvents&ici=fp5",
  renderEventLink: (element) => <a href="/tosomewhere">{element}</a>,
};

const organizationArgs = {
  organization: {
    name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
    logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
  },
  renderOrganizationLink: (element) => <a href="/toorganization">{element}</a>,
};

export default {
  title: 'Components/Card/EventCard',
  component: EventCard,
  argTypes: {
    type: {
      control: 'select',
      options: ['horizontal-mobile', 'horizontal', 'vertical'],
      description: 'The type of the event card',
    },
    title: {
      control: 'text',
      description: 'The title of the event',
    },
    cover: {
      control: 'text',
      description: 'The cover image URL',
    },
    date: {
      control: 'text',
      description: 'The event date',
    },
    place: {
      control: 'text',
      description: 'The event location',
    },
    price: {
      control: 'text',
      description: 'The event price',
    },
    ads: {
      control: 'boolean',
      description: 'Whether the card is an advertisement',
    },
    finished: {
      control: 'boolean',
      description: 'Whether the event is finished',
    },
    partnership: {
      control: 'object',
      description: 'Partnership information',
    },
    organization: {
      control: 'object',
      description: 'Organization information',
    },
    clickBookmark: {
      control: 'function',
      description: 'Function to handle bookmark click',
    },
    renderEventLink: {
      control: 'function',
      description: 'Function to render event link',
    },
    renderOrganizationLink: {
      control: 'function',
      description: 'Function to render organization link',
    },
    coverImage: {
      control: 'element',
      description: 'Custom cover image element',
    },
  },
};

const Template = (args) => <EventCard {...args} />;

export const HorizontalMobile = Template.bind({});
HorizontalMobile.args = {
  ...defaultArgs,
  type: 'horizontal-mobile',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...defaultArgs,
  type: 'horizontal',
};

export const HorizontalWithAds = Template.bind({});
HorizontalWithAds.args = {
  ...defaultArgs,
  type: 'horizontal',
  ads: true,
};

export const HorizontalWithFinished = Template.bind({});
HorizontalWithFinished.args = {
  ...defaultArgs,
  type: 'horizontal',
  finished: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  renderEventLink: (element) => <a href="/tosomewherenew">{element}</a>,
};

export const VerticalWithCustomCover = Template.bind({});
VerticalWithCustomCover.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  renderEventLink: (element) => <a href="/tosomewherenew">{element}</a>,
  coverImage: <VerticalCover src="https://static.evand.net/assets/images/defaults/event-cover.jpg" />,
};

export const VerticalWithFinished = Template.bind({});
VerticalWithFinished.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  finished: true,
  renderEventLink: (element) => <a href="/tosomewherenew">{element}</a>,
};

export const VerticalWithAds = Template.bind({});
VerticalWithAds.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  ads: true,
  renderEventLink: (element) => <a href="/tosomewherenew">{element}</a>,
};

export const VerticalWithPartnership = Template.bind({});
VerticalWithPartnership.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  partnership: {
    status: 'colleague',
  },
  renderEventLink: (element) => <a href="/tosomewherenew">{element}</a>,
};
