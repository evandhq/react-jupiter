import React from 'react';

import { action } from '@storybook/addon-actions';
import Captcha from './index';

export default {
  title: 'Form/Captcha',
  component: Captcha,
  
  argTypes: {
    errorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا',
    },
    src: {
      control: 'text',
      defaultValue: 'https://static.evand.net/captcha/12c178c8006cb0cea5253a83db6a96db.jpg',
    },
    handleCaptchaError: {
      action: 'handleCaptchaError',
    },
    handleRetryCaptcha: {
      action: 'handleRetryCaptcha',
    },
  },
};

const Template = (args) => <Captcha {...args} />;

export const Default = Template.bind({});
Default.args = {
  errorMessage: 'ارور زیبا',
  src: 'https://static.evand.net/captcha/12c178c8006cb0cea5253a83db6a96db.jpg',
  handleCaptchaError: action('trigger what you want to do when captcha src has an err'),
  handleRetryCaptcha: action('trigger what you want to do when click on retry button'),
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMessage: 'لطفا کد امنیتی را وارد کنید',
};
