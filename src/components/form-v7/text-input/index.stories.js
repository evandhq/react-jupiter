import React from 'react';
import { useForm } from 'react-hook-form';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  text,
  boolean,
} from '@storybook/addon-knobs';
import TextInput from './index';

storiesOf('Form-V7/Inputs', module)
  .add('Full option Text Input', () => {
    const {
      register,
    } = useForm();
    return (
      <TextInput
        htmlElementName="text-name-02"
        required={true}
        label={text('optional label', 'این لیبل است')}
        register={register}
        placeholder={text('optional placeholder', 'متن پیشفرض')}
        disabled={boolean('disabled(default : false)', false)}
        description={text('optional description', 'توضیحات اضافه')}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        type={select('select type(default : text)', ['text', 'password'])}
      />
    )
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
