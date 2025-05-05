import React from 'react';
import ProgressBar from './index';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    width: {
      control: 'number',
      description: 'Current progress value',
    },
    labels: {
      control: 'array',
      description: 'Labels for different thresholds',
    },
    points: {
      control: 'object',
      description: 'Object containing partner and colleague threshold points',
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 50,
  labels: ['Label 1', 'Label 2'],
  points: {
    partner: 75,
    colleague: 100,
  },
};
