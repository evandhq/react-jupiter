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
import FileInput from './index';

storiesOf('Form-V7/Inputs', module)
  .add('File Input', () => {
    const {
      register,
    } = useForm();
    return (
      <FileInput
        htmlElementName="text-name-02"
        register={register}
        label={text('optional label', 'این لیبل است')}
        number={5}
        placeholder={text('optional placeholder', 'متن پیشفرض')}
        disabled={boolean('disabled(default : false)', false)}
        description={text('optional description', 'توضیحات اضافه')}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        required={true}
      />
    )
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
