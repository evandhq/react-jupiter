import React from 'react';
import NumericSummeryReport from './index';

export default {
  title: 'Components/NumericSummeryReport',
  component: NumericSummeryReport,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the report',
    },
    value: {
      control: 'number',
      description: 'Numeric value to display',
    },
    textColor: {
      control: 'color',
      description: 'Color of the text',
    },
  },
};

const Template = (args) => <NumericSummeryReport {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Total Users',
  value: 1234,
  textColor: '#000000',
};

export const WithColor = Template.bind({});
WithColor.args = {
  title: 'Active Users',
  value: 567,
  textColor: '#2196F3',
};
