import React from 'react';

import TextInput from './index';

export default {
  title: 'Form/Inputs',
  component: TextInput,
  
  argTypes: {
    htmlElementName: {
      control: 'text',
      defaultValue: 'text-name-01',
    },
    label: {
      control: 'text',
      defaultValue: 'این لیبل است',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'متن پیشفرض',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    description: {
      control: 'text',
      defaultValue: 'توضیحات اضافه',
    },
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا',
    },
    type: {
      control: 'select',
      options: ['text', 'password'],
      defaultValue: 'text',
    },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {
  htmlElementName: 'text-name-01',
  label: 'این لیبل است',
};

export const FullOptions = Template.bind({});
FullOptions.args = {
  htmlElementName: 'text-name-02',
  label: 'این لیبل است',
  placeholder: 'متن پیشفرض',
  disabled: false,
  description: 'توضیحات اضافه',
  errorMessage: 'ارور زیبا',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  ...FullOptions.args,
  type: 'password',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...FullOptions.args,
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'این فیلد الزامی است',
};
