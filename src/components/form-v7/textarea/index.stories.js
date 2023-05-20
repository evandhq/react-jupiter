import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
import Textarea from './index';
import { useForm } from 'react-hook-form';

storiesOf('Form-V7/Textarea', module)
  .add('Minimal Textarea', () => {
    const {
      register
    } = useForm();
    return (
      <Textarea register={register} />
    )
  })
  .add('Full option Textarea', () => {
    const {
      register
    } = useForm();

    return(
      <Textarea
        register={register}
        label={text('optional label', 'توضیجات')}
        htmlElementName={text('optional html-element-name', 'html-element-name')}
        placeholder={text('optional placeholder', 'این پلیس هولدر است')}
        minHeight={text('optional minHeight (it should be a number)', '120')}
        isDisabled={boolean('optional disabled all', false)}
        resize={'both'}
        handleChange={action('trigger what you want to do in onChange function')}
        errorMessage={text('optional error msg', 'ارور زیبا')}
      />
    )
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
