import React from 'react';
import { useForm } from 'react-hook-form';

import { action } from '@storybook/addon-actions';
import Select from './select';
import SelectOption from './option';

export default {
  title: 'Form-v7/Dropdown',
  component: Select,
  
  argTypes: {
    htmlElementName: {
      control: 'text',
      defaultValue: 'استان',
    },
    placeholder: {
      control: 'text',
      defaultValue: '__استان مورد نظر خود را انتخاب کنید__',
    },
    defaultValue: {
      control: 'text',
      defaultValue: '30',
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    label: {
      control: 'text',
      defaultValue: 'محل برگزاری رویداد',
    },
    number: {
      control: 'number',
      defaultValue: 3,
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
    <Select {...args} register={register} control={control}>
      <SelectOption value="20" label="کرج" />
      <SelectOption value="30" label="تهران" />
      <SelectOption value="40" label="فم" />
    </Select>
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  htmlElementName: 'select',
  placeholder: 'یک گزینه را انتخاب کنید',
  defaultValue: 'question 2',
  label: 'select box',
  number: 1,
  required: false,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  htmlElementName: 'استان',
  placeholder: '__استان مورد نظر خود را انتخاب کنید__',
  handleChange: action('trigger what you want to do in onChange function'),
};

export const FullOptions = Template.bind({});
FullOptions.args = {
  htmlElementName: 'استان',
  defaultValue: '30',
  handleChange: action('trigger what you want to do in onChange function'),
  isDisabled: false,
  label: 'محل برگزاری رویداد',
  number: 3,
  errorMessage: 'ارور زیبا',
  required: true,
};

export const WithPlaceholderAndOptions = Template.bind({});
WithPlaceholderAndOptions.args = {
  ...FullOptions.args,
  placeholder: '__استان مورد نظر خود را انتخاب کنید__',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا یک گزینه را انتخاب کنید',
};

const SelectOptionTemplate = (args) => {
  const { register, control } = useForm();
  return (
    <Select
      htmlElementName="استان"
      defaultValue="30"
      handleChange={action('trigger what you want to do in onChange function')}
      isDisabled={false}
      register={register}
      required
      control={control}
    >
      <SelectOption {...args} />
      <SelectOption value="30" label="تهران" />
      <SelectOption value="40" label="فم" />
    </Select>
  );
};

export const CustomOption = SelectOptionTemplate.bind({});
CustomOption.args = {
  value: '20',
  label: 'کرج',
  isDisabled: false,
};
