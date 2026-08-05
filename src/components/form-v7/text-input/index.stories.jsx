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
    type: {
      control: 'select',
      options: ['text', 'password', 'number'],
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
    priceFormat: {
      control: 'boolean',
      defaultValue: false,
    },
    className: {
      control: 'text',
      defaultValue: '',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md',
    },
  },
};

const Template = (args) => {
  const { register, control } = useForm();
  return (
    <TextInput {...args} register={register} control={control} />
  );
};

export const FullOptions = Template.bind({});
FullOptions.args = {
  htmlElementName: 'text-name-02',
  label: 'این لیبل است',
  number: 23,
  placeholder: 'متن پیشفرض',
  disabled: false,
  description: 'توضیحات اضافه',
  required: true,
  type: 'text',
  rtl: true,
};

export const LTR = Template.bind({});
LTR.args = {
  htmlElementName: 'en-name',
  label: 'English Label',
  placeholder: 'LTR placeholder',
  type: 'text',
  rtl: false,
};

export const Password = Template.bind({});
Password.args = {
  htmlElementName: 'password-field',
  label: 'رمز عبور',
  placeholder: 'رمز عبور خود را وارد کنید',
  type: 'password',
  required: true,
};

export const Numeric = Template.bind({});
Numeric.args = {
  htmlElementName: 'quantity',
  label: 'تعداد',
  placeholder: 'عدد وارد کنید',
  type: 'number',
  required: true,
};

export const Price = Template.bind({});
Price.args = {
  htmlElementName: 'price',
  label: 'قیمت (تومان)',
  placeholder: 'قیمت را وارد کنید',
  type: 'number',
  priceFormat: true,
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  htmlElementName: 'disabled-field',
  label: 'فیلد غیرفعال',
  placeholder: 'غیرفعال',
  disabled: true,
};
