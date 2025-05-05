import React from 'react';

import { action } from '@storybook/addon-actions';
import Checkbox from './checkbox';
import CheckboxOption from './checkbox-option';

export default {
  title: 'Form/Checkbox',
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
    handleChange: {
      action: 'handleChange',
    },
  },
};

const Template = (args) => (
  <Checkbox {...args}>
    <CheckboxOption value="first" label="First Value" />
    <CheckboxOption value="sec" label="Sec Value" />
    <CheckboxOption value="third" label="Third Value" />
  </Checkbox>
);

export const Minimal = Template.bind({});
Minimal.args = {};

export const FullOptions = Template.bind({});
FullOptions.args = {
  groupName: 'degree',
  label: 'در کدام موضوع ها توانایی دارید',
  handleChange: action('trigger what you want to do in onChange function'),
  isDisabled: false,
  type: 'horizontal',
  errorMessage: 'ارور زیبا',
};

const FullOptionsTemplate = (args) => (
  <Checkbox {...args}>
    <CheckboxOption value="100" label="ورزشی" />
    <CheckboxOption value="234" label="علمی" />
    <CheckboxOption value="300" label="مذهبی" />
    <CheckboxOption value="400" label="فرهنگی" isChecked />
    <CheckboxOption value="500" label="هنری" isChecked />
  </Checkbox>
);

export const WithPreSelectedOptions = FullOptionsTemplate.bind({});
WithPreSelectedOptions.args = {
  ...FullOptions.args,
};

export const VerticalLayout = FullOptionsTemplate.bind({});
VerticalLayout.args = {
  ...FullOptions.args,
  type: 'vertical',
};

export const Disabled = FullOptionsTemplate.bind({});
Disabled.args = {
  ...FullOptions.args,
  isDisabled: true,
};

export const WithError = FullOptionsTemplate.bind({});
WithError.args = {
  ...FullOptions.args,
  errorMessage: 'لطفا حداقل یک گزینه را انتخاب کنید',
};

const CheckboxOptionTemplate = (args) => (
  <Checkbox groupName="degree" label="در کدام موضوع ها توانایی دارید">
    <CheckboxOption {...args} />
    <CheckboxOption value="200" label="علمی" />
    <CheckboxOption value="300" label="مذهبی" />
    <CheckboxOption value="400" label="فرهنگی" />
    <CheckboxOption value="500" label="هنری" />
  </Checkbox>
);

export const CustomOption = CheckboxOptionTemplate.bind({});
CustomOption.args = {
  label: 'ورزشی',
  value: '100',
  isDisabled: false,
  isChecked: false,
};

export const DisabledOption = CheckboxOptionTemplate.bind({});
DisabledOption.args = {
  ...CustomOption.args,
  isDisabled: true,
};

export const CheckedOption = CheckboxOptionTemplate.bind({});
CheckedOption.args = {
  ...CustomOption.args,
  isChecked: true,
};
