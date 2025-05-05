import React from 'react';
import { useForm } from 'react-hook-form';

import FileInput from './index';

export default {
  title: 'Form-V7/File Input',
  component: FileInput,
  
  argTypes: {
    htmlElementName: {
      control: 'text',
      defaultValue: 'file-input',
    },
    label: {
      control: 'text',
      defaultValue: 'این لیبل است',
    },
    description: {
      control: 'text',
      defaultValue: 'حجم فایل ارسالی باید کمتر از ۴ مگابایت باشد',
    },
    number: {
      control: 'number',
      defaultValue: 5,
    },
    placeholder: {
      control: 'text',
      defaultValue: 'متن پیشفرض',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا',
    },
    required: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

const Template = (args) => {
  const { register, control } = useForm();
  return <FileInput {...args} register={register} control={control} />;
};

export const Default = Template.bind({});
Default.args = {
  htmlElementName: 'file-input',
  label: 'این لیبل است',
  description: 'حجم فایل ارسالی باید کمتر از ۴ مگابایت باشد',
  number: 5,
  placeholder: 'متن پیشفرض',
  disabled: false,
  errorMessage: 'ارور زیبا',
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMessage: 'لطفا یک فایل را انتخاب کنید',
};
