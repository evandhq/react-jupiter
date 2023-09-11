import React from 'react';
import { useForm } from 'react-hook-form';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
} from '@storybook/addon-knobs';
import FileInput from './index';

storiesOf('Form-V7/Inputs', module)
  .add('File Input', () => {
    const {
      register,
    } = useForm();
    return (
      <FileInput
        htmlElementName="file-input"
        register={register}
        label={text('optional label', 'این لیبل است')}
        description="حجم فایل ارسالی باید کمتر از ۴ مگابایت باشد"
        number={5}
        placeholder={text('optional placeholder', 'متن پیشفرض')}
        disabled={boolean('disabled(default : false)', false)}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        required
      />
    );
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
