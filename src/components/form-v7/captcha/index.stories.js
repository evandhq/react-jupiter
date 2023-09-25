import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { useForm } from 'react-hook-form';
import {
  withKnobs,
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
        label="کد تصویری"
        htmlElementName="captcha"
        imageUrl="https://static.evand.net/captcha/0bb5a9832be7b86a2a0a646ae2fd1649.jpg"
        handleChange={action('trigger what you want to do in onChange function')}
        fetchData={() => console.log('fetching')}
      />
    );
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
