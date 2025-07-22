import React from 'react';

import { action } from '@storybook/addon-actions';
import Radio from './radio';
import RadioOption from './radio-option';

export default {
  title: 'Form/Radio',
  component: Radio,
  
  argTypes: {
    groupName: {
      control: 'text',
      defaultValue: 'degree',
    },
    label: {
      control: 'text',
      defaultValue: 'آخرین مدرک تحصیلی خود را انتخاب کنید',
    },
    defaultCheckedValue: {
      control: 'text',
      defaultValue: '300',
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
  <Radio {...args}>
    <RadioOption value="first" label="First Value" />
    <RadioOption value="sec" label="Sec Value" />
    <RadioOption value="third" label="Third Value" />
  </Radio>
);

export const Minimal = Template.bind({});
Minimal.args = {};

export const FullOptions = Template.bind({});
FullOptions.args = {
  groupName: 'degree',
  label: 'آخرین مدرک تحصیلی خود را انتخاب کنید',
  defaultCheckedValue: '300',
  handleChange: action('trigger what you want to do in onChange function'),
  isDisabled: false,
  type: 'horizontal',
  errorMessage: 'ارور زیبا',
};

const FullOptionsTemplate = (args) => (
  <Radio {...args}>
    <RadioOption value="100" label="زیر دیپلم" />
    <RadioOption value="234" label="دیپلم" />
    <RadioOption value="300" label="کارشناسی" />
    <RadioOption value="400" label="کارشناسی ارشد" />
    <RadioOption value="500" label="دکترا" />
  </Radio>
);

export const WithDefaultValue = FullOptionsTemplate.bind({});
WithDefaultValue.args = {
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
  errorMessage: 'لطفا یک گزینه را انتخاب کنید',
};

const RadioOptionTemplate = (args) => (
  <Radio groupName="degree" label="آخرین مدرک تحصیلی خود را انتخاب کنید">
    <RadioOption {...args} />
    <RadioOption value="200" label="دیپلم" />
    <RadioOption value="300" label="کارشناسی" />
    <RadioOption value="400" label="کارشناسی ارشد" />
    <RadioOption value="500" label="دکترا" />
  </Radio>
);

export const CustomOption = RadioOptionTemplate.bind({});
CustomOption.args = {
  label: 'زیر دیپلم',
  value: '100',
  isDisabled: false,
};

export const DisabledOption = RadioOptionTemplate.bind({});
DisabledOption.args = {
  ...CustomOption.args,
  isDisabled: true,
};
