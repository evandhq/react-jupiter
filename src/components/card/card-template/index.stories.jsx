import React from 'react';
import CardTemplate from './index';

export default {
  title: 'Components/Card/CardTemplate',
  component: CardTemplate,
  argTypes: {
    level: {
      control: 'number',
      description: 'The level of the card (1-5)',
    },
    hoverToLevel: {
      control: 'number',
      description: 'The level to hover to',
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The direction of the card content',
    },
    background: {
      control: 'text',
      description: 'The background image URL',
    },
    renderLink: {
      control: 'function',
      description: 'Function to render a link wrapper',
    },
    style: {
      control: 'object',
      description: 'Additional styles to apply',
    },
    children: {
      control: 'text',
      description: 'The content of the card',
    },
  },
};

const Template = (args) => (
  <CardTemplate {...args}>
    <div style={{ height: '100px' }}>Hello card template.</div>
  </CardTemplate>
);

export const Default = Template.bind({});

export const Level2 = Template.bind({});
Level2.args = {
  level: 2,
  style: { marginTop: '50px' },
};

export const Level3 = Template.bind({});
Level3.args = {
  level: 3,
  style: { marginTop: '50px' },
};

export const Level4 = Template.bind({});
Level4.args = {
  level: 4,
  style: { marginTop: '50px' },
};

export const Level5 = Template.bind({});
Level5.args = {
  level: 5,
  style: { marginTop: '50px' },
};

export const HoverLevel1To4 = Template.bind({});
HoverLevel1To4.args = {
  level: 1,
  hoverToLevel: 4,
  style: { marginTop: '50px' },
};

export const WithLink = Template.bind({});
WithLink.args = {
  renderLink: (el) => <a href="http://google.com">{el}</a>,
  children: <div style={{ height: '100px' }}>with link to google</div>,
};

export const VerticalDirection = Template.bind({});
VerticalDirection.args = {
  direction: 'vertical',
  children: (
    <>
      <div style={{ height: '100px', backgroundColor: 'lightgray' }}>Hello card template.</div>
      <div style={{ height: '100px', backgroundColor: 'oldlace' }}>Hello card template.</div>
    </>
  ),
};

export const HorizontalDirection = Template.bind({});
HorizontalDirection.args = {
  direction: 'horizontal',
  children: (
    <>
      <div style={{ height: '100px', backgroundColor: 'lightgray' }}>Hello card template.</div>
      <div style={{ height: '100px', backgroundColor: 'oldlace' }}>Hello card template.</div>
    </>
  ),
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  background: 'http://static.simpledesktops.com/uploads/desktops/2019/11/08/Jupiter.png',
};
