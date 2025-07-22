import React from 'react';

import { action } from '@storybook/addon-actions';
import Textarea from './index';

export default {
  title: 'Form/Textarea',
  component: Textarea,
  
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'توضیجات',
    },
    htmlElementName: {
      control: 'text',
      defaultValue: 'html-element-name',
    },
    defaultValue: {
      control: 'text',
      defaultValue: 'توضیحات قبلی',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'این پلیس هولدر است',
    },
    minHeight: {
      control: 'text',
      defaultValue: '120',
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal'],
      defaultValue: 'vertical',
    },
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا',
    },
    handleChange: {
      action: 'handleChange',
    },
  },
};

const Template = (args) => <Textarea {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {};

export const FullOptions = Template.bind({});
FullOptions.args = {
  label: 'توضیجات',
  htmlElementName: 'html-element-name',
  defaultValue: 'توضیحات قبلی',
  placeholder: 'این پلیس هولدر است',
  minHeight: '120',
  isDisabled: false,
  resize: 'vertical',
  handleChange: action('trigger what you want to do in onChange function'),
  errorMessage: 'ارور زیبا',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true,
};

export const NoResize = Template.bind({});
NoResize.args = {
  ...FullOptions.args,
  resize: 'none',
};

export const HorizontalResize = Template.bind({});
HorizontalResize.args = {
  ...FullOptions.args,
  resize: 'horizontal',
};

export const WithError = Template.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا توضیحات را وارد کنید',
};
