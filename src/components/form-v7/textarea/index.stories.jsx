import React from 'react';

import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import Textarea from './index';

export default {
  title: 'Form-V7/Textarea',
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
    required: {
      control: 'boolean',
      defaultValue: true,
    },
    resize: {
      control: 'select',
      options: ['both', 'horizontal', 'vertical', 'none'],
      defaultValue: 'both',
    },
    defaultValue: {
      control: 'text',
      defaultValue: 'این یک باکس متنی می‌باشد',
    },
  },
};

const Template = (args) => {
  const { register, control } = useForm();
  return <Textarea {...args} register={register} control={control} />;
};

export const Minimal = Template.bind({});
Minimal.args = {};

export const FullOptions = Template.bind({});
FullOptions.args = {
  label: 'توضیجات',
  htmlElementName: 'html-element-name',
  placeholder: 'این پلیس هولدر است',
  minHeight: '120',
  isDisabled: false,
  required: true,
  resize: 'both',
  handleChange: action('trigger what you want to do in onChange function'),
  defaultValue: 'این یک باکس متنی می‌باشد',
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
  errorMessage: 'لطفا متن را وارد کنید',
};
