import React from 'react';

import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import Captcha from './index';

export default {
  title: 'Form-v7/Captcha',
  component: Captcha,
  
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'کد تصویری',
    },
    htmlElementName: {
      control: 'text',
      defaultValue: 'captcha',
    },
    imageUrl: {
      control: 'text',
      defaultValue: 'https://static.evand.net/captcha/0bb5a9832be7b86a2a0a646ae2fd1649.jpg',
    },
    errorMessage: {
      control: 'text',
      defaultValue: 'لطفا کد تصویری را وارد کنید',
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
    <Captcha
      {...args}
      register={register}
      control={control}
      handleChange={action('trigger what you want to do in onChange function')}
      fetchData={() => console.log('fetching')}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'کد تصویری',
  htmlElementName: 'captcha',
  imageUrl: 'https://static.evand.net/captcha/0bb5a9832be7b86a2a0a646ae2fd1649.jpg',
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMessage: 'کد تصویری نامعتبر است',
};
