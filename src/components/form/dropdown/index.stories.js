import React from 'react';

import { action } from '@storybook/addon-actions';
import Select from './select';
import SelectOption from './option';

export default {
  title: 'Form/Dropdown',
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
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا',
    },
    handleChange: {
      action: 'handleChange',
    },
  },
};

const Template = (args) => (
  <Select {...args}>
    <SelectOption value="first" label="First Value" />
    <SelectOption value="sec" label="2nd Value" />
  </Select>
);

export const Minimal = Template.bind({});
Minimal.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  htmlElementName: 'استان',
  placeholder: '__استان مورد نظر خود را انتخاب کنید__',
  handleChange: action('trigger what you want to do in onChange function'),
};

const WithOptionsTemplate = (args) => (
  <Select {...args}>
    <SelectOption value="20" label="کرج" />
    <SelectOption value="30" label="تهران" />
    <SelectOption value="40" label="فم" isDisabled />
  </Select>
);

export const FullOptions = WithOptionsTemplate.bind({});
FullOptions.args = {
  htmlElementName: 'استان',
  defaultValue: '30',
  handleChange: action('trigger what you want to do in onChange function'),
  isDisabled: false,
  label: 'محل برگزاری رویداد',
  errorMessage: 'ارور زیبا',
};

export const WithPlaceholderAndOptions = WithOptionsTemplate.bind({});
WithPlaceholderAndOptions.args = {
  ...FullOptions.args,
  placeholder: '__استان مورد نظر خود را انتخاب کنید__',
};

export const Disabled = WithOptionsTemplate.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true,
};

export const WithError = WithOptionsTemplate.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا یک گزینه را انتخاب کنید',
};

const SelectOptionTemplate = (args) => (
  <Select
    htmlElementName="استان"
    defaultValue="30"
    handleChange={action('trigger what you want to do in onChange function')}
    isDisabled={false}
  >
    <SelectOption {...args} />
    <SelectOption value="30" label="تهران" />
    <SelectOption value="40" label="فم" />
  </Select>
);

export const CustomOption = SelectOptionTemplate.bind({});
CustomOption.args = {
  value: '20',
  label: 'کرج',
  isDisabled: false,
};

export const DisabledOption = SelectOptionTemplate.bind({});
DisabledOption.args = {
  ...CustomOption.args,
  isDisabled: true,
};
