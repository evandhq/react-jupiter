import React from 'react';
import { useForm } from 'react-hook-form';

import TextInput from './index';

export default {
  title: 'Form-V7/Text Input',
  component: TextInput,
  
  argTypes: {
    htmlElementName: {
      control: 'text',
      defaultValue: 'text-name-02',
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
    rtl: {
      control: 'boolean',
      defaultValue: true,
    },
    required: {
      control: 'boolean',
      defaultValue: true,
    },
    number: {
      control: 'number',
      defaultValue: 23,
    },
  },
};

const Template = (args) => {
  const { register, control } = useForm();
  return <TextInput {...args} register={register} control={control} />;
};

export const FullOptions = Template.bind({});
FullOptions.args = {
  htmlElementName: 'text-name-02',
  required: true,
  label: 'این لیبل است',
  number: 23,
  placeholder: 'متن پیشفرض',
  disabled: false,
  description: 'توضیحات اضافه',
  errorMessage: 'ارور زیبا',
  type: 'text',
  rtl: true,
};

export const LTR = Template.bind({});
LTR.args = {
  ...FullOptions.args,
  rtl: false,
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
  errorMessage: 'لطفا این فیلد را پر کنید',
};
