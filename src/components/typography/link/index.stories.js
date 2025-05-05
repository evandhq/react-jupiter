import React from 'react';
import Link from './index';

export default {
  title: 'Components/Typography/Link',
  component: Link,
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL or render function for the link',
    },
    size: {
      control: 'number',
      description: 'The font size of the link',
    },
    strong: {
      control: 'boolean',
      description: 'Whether the link text should be bold',
    },
    emphasized: {
      control: 'boolean',
      description: 'Whether the link text should be emphasized',
    },
    linkContent: {
      control: 'text',
      description: 'The content of the link when using renderProps',
    },
    children: {
      control: 'text',
      description: 'The content of the link',
    },
  },
};

const Template = (args) => <Link {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  href: 'http://www.google.com',
  children: 'ورود به سایت گوگل',
};

export const Small = Template.bind({});
Small.args = {
  href: 'http://www.google.com',
  size: 12,
  children: 'لینک با سایز کوچکتر',
};

export const Bold = Template.bind({});
Bold.args = {
  href: 'http://www.google.com',
  size: 12,
  strong: true,
  children: 'لینک با متن بولد',
};

export const Emphasized = Template.bind({});
Emphasized.args = {
  href: 'http://www.google.com',
  size: 12,
  emphasized: true,
  children: 'لینک با متن کچ',
};

export const WithRenderProps = Template.bind({});
WithRenderProps.args = {
  href: (el) => <a href="http://yahoo.com">{el}</a>,
  linkContent: 'لینک با رندر پراپس',
};
