import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';
import { useForm } from 'react-hook-form';
import Radio from './radio';
import RadioOption from './radio-option';

storiesOf('Form-V7/Radio', module)
  .add('Minimal Form/Radio', () => {
    const {
      register,
    } = useForm({
      defaultValues: {
        radio0: 'first',
      },
    });

    return (
      <Radio groupName="radio0" label="انتخاب رادیو" register={register}>
        <RadioOption value="first" label="First Value" />
        <RadioOption value="sec" label="Sec Value" />
        <RadioOption value="third" label="Third Value" />
      </Radio>
    );
  })
  .add('Full option Radio', () => {
    const {
      register,
    } = useForm();

    return (
      <Radio
        groupName={text('optional groupName(but highly recommended to set manually)', 'degree')}
        label={text('optional label', 'آخرین مدرک تحصیلی خود را انتخاب کنید')}
        defaultCheckedValue="300"
        handleChange={action('trigger what you want to do in onChange function')}
        isDisabled={boolean('optional disabled all', false)}
        type={select('optional type', ['horizontal', 'vertical'])}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        register={register}
        required
      >
        <RadioOption value="100" label="زیر دیپلم" />
        <RadioOption value="234" label="دیپلم" />
        <RadioOption value="300" label="کارشناسی" />
        <RadioOption value="400" label="کارشناسی ارشد" />
        <RadioOption value="500" label="دکترا" />
      </Radio>
    );
  })
  .add('Full option RadioOption', () => {
    const {
      register,
    } = useForm();
    return (
      <Radio
        groupName="degree"
        label="آخرین مدرک تحصیلی خود را انتخاب کنید"
        number={1}
        register={register}
      >
        <RadioOption
          label={text('label', 'زیر دیپلم')}
          value={text('value', '100')}
          isDisabled={boolean('optional disabled item', false)}
        />
        <RadioOption value="200" label="دیپلم" />
        <RadioOption value="300" label="کارشناسی" />
        <RadioOption value="400" label="کارشناسی ارشد" />
        <RadioOption value="500" label="دکترا" />
      </Radio>
    );
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
