import React from 'react';
import { useForm } from 'react-hook-form';
import Toggle from './toggle';

export default {
  title: 'Form-V7/Toggle',
  component: Toggle,

  argTypes: {
    name: {
      control: 'text',
      defaultValue: 'toggle',
    },
    label: {
      control: 'text',
      defaultValue: 'فعال‌سازی اعلان‌ها',
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
    number: {
      control: 'number',
      defaultValue: null,
    },
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
  },
};

const Template = (args) => {
  const { register, control } = useForm();
  return <Toggle {...args} register={register} control={control} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'toggle-default',
  label: 'فعال‌سازی اعلان‌ها',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'toggle-disabled',
  label: 'اعلان‌ها غیرفعال هستند',
  isDisabled: true,
};

export const Required = Template.bind({});
Required.args = {
  name: 'toggle-required',
  label: 'پذیرش قوانین',
  required: true,
};

export const WithNumber = Template.bind({});
WithNumber.args = {
  name: 'toggle-numbered',
  label: 'ذخیره اطلاعات',
  number: 3,
};

export const Vertical = Template.bind({});
Vertical.args = {
  name: 'toggle-vertical',
  label: 'فعال‌سازی حالت تاریک',
  type: 'vertical',
};
