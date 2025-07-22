import React from 'react';
import ShowDate from './index';

export default {
  title: 'Components/ShowDate',
  component: ShowDate,
  argTypes: {
    date: {
      control: 'date',
      description: 'Date to display',
    },
    format: {
      control: 'text',
      description: 'Date format string',
    },
    fontSize: {
      control: 'number',
      description: 'Font size in pixels',
    },
    color: {
      control: 'color',
      description: 'Text color',
    },
  },
};

const Template = (args) => <ShowDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: new Date('2024-03-10'),
  format: 'YYYY-MM-DD',
  fontSize: 16,
  color: '#000000',
};

export const CustomFormat = Template.bind({});
CustomFormat.args = {
  date: new Date('2024-03-10'),
  format: 'MMM DD, YYYY',
  fontSize: 16,
  color: '#000000',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  date: new Date('2024-03-10'),
  format: 'YYYY-MM-DD',
  fontSize: 24,
  color: '#2196F3',
};
