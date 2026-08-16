import React from 'react';

import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import Radio from './radio';
import RadioOption from './radio-option';

export default {
  title: 'Form-V7/Radio',
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
    required: {
      control: 'boolean',
      defaultValue: true,
    },
    number: {
      control: 'number',
      defaultValue: 1,
    },
    wrapperClassName: {
      control: 'text',
      defaultValue: 'justify-between',
    },
  },
};

const Template = (args) => {
  const { register, control } = useForm();
  return (
    <Radio {...args} register={register} control={control}>
      <RadioOption value="100" label="زیر دیپلم" />
      <RadioOption value="234" label="دیپلم" />
      <RadioOption value="300" label="کارشناسی" />
      <RadioOption value="400" label="کارشناسی ارشد" />
      <RadioOption value="500" label="دکترا" />
    </Radio>
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  groupName: 'radio0',
  label: 'انتخاب رادیو',
  required: true,
};

export const FullOptions = Template.bind({});
FullOptions.args = {
  groupName: 'degree',
  label: 'آخرین مدرک تحصیلی خود را انتخاب کنید',
  defaultCheckedValue: '300',
  handleChange: action('trigger what you want to do in onChange function'),
  isDisabled: false,
  type: 'horizontal',
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

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  ...FullOptions.args,
  wrapperClassName: 'justify-start gap-4',
};

export const ResponsiveClasses = Template.bind({});
ResponsiveClasses.args = {
  ...FullOptions.args,
  wrapperClassName: 'justify-start md:flex-row flex-col md:gap-6 gap-3',
};

const RadioOptionTemplate = (args) => {
  const { register, control } = useForm();
  return (
    <Radio groupName="degree" label="آخرین مدرک تحصیلی خود را انتخاب کنید" number={1} register={register} control={control}>
      <RadioOption {...args} />
      <RadioOption value="200" label="دیپلم" />
      <RadioOption value="300" label="کارشناسی" />
      <RadioOption value="400" label="کارشناسی ارشد" />
      <RadioOption value="500" label="دکترا" />
    </Radio>
  );
};

export const CustomOption = RadioOptionTemplate.bind({});
CustomOption.args = {
  label: 'زیر دیپلم',
  value: '100',
  isDisabled: false,
};
