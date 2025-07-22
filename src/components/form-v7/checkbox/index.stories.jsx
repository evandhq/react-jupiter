import React from 'react';
import { useForm } from 'react-hook-form';

import { action } from '@storybook/addon-actions';
import Checkbox from './checkbox';
import CheckboxOption from './checkbox-option';

export default {
  title: 'Form-V7/Checkbox',
  component: Checkbox,
  
  argTypes: {
    groupName: {
      control: 'text',
      defaultValue: 'degree',
    },
    label: {
      control: 'text',
      defaultValue: 'در کدام موضوع ها توانایی دارید',
    },
    number: {
      control: 'number',
      defaultValue: 4,
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
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
  return (
    <Checkbox {...args} register={register} control={control}>
      <CheckboxOption value="100" label="ورزشی" />
      <CheckboxOption value="234" label="علمی" />
      <CheckboxOption value="300" label="مذهبی" />
      <CheckboxOption value="400" label="فرهنگی" />
      <CheckboxOption value="500" label="هنری" />
    </Checkbox>
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  groupName: 'degree',
  required: true,
};

export const FullOptions = Template.bind({});
FullOptions.args = {
  groupName: 'degree',
  label: 'در کدام موضوع ها توانایی دارید',
  number: 4,
  handleChange: action('trigger what you want to do in onChange function'),
  isDisabled: false,
  type: 'horizontal',
  errorMessage: 'ارور زیبا',
  required: true,
};

export const VerticalLayout = Template.bind({});
VerticalLayout.args = {
  ...FullOptions.args,
  type: 'vertical',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا حداقل یک گزینه را انتخاب کنید',
};

const CheckboxOptionTemplate = (args) => {
  const { register } = useForm();
  return (
    <Checkbox groupName="degree" required label="در کدام موضوع ها توانایی دارید" register={register}>
      <CheckboxOption {...args} register={register} />
      <CheckboxOption value="200" label="علمی" />
      <CheckboxOption value="300" label="مذهبی" />
      <CheckboxOption value="400" label="فرهنگی" />
      <CheckboxOption value="500" label="هنری" />
    </Checkbox>
  );
};

export const CustomOption = CheckboxOptionTemplate.bind({});
CustomOption.args = {
  label: 'ورزشی',
  value: '100',
  isDisabled: false,
  isChecked: false,
};
