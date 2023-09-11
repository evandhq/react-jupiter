import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { useForm } from 'react-hook-form';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';
import Captcha from './index';

storiesOf('Form-v7/Captcha', module)
  .add('captcha example', () => {
    const {
      register,
      control,
    } = useForm();
    return (
      <Captcha
        register={register}
        control={control}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        src={text('captcha img src', 'https://static.evand.net/captcha/12c178c8006cb0cea5253a83db6a96db.jpg')}
        handleCaptchaError={action('trigger what you want to do when captcha src has an err')}
        handleRetryCaptcha={action('trigger what you want to do when click on retry button')}
      />
    );
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
