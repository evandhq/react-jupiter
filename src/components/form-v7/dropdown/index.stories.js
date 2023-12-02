import React from 'react';
import { useForm } from 'react-hook-form';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
} from '@storybook/addon-knobs';
import Select from './select';
import SelectOption from './option';

storiesOf('Form-v7/Dropdown', module)
  .add('Minimal Select', () => {
    const {
      register,
      handleSubmit,
      control,
      setError,
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      setError({
        message: '\u06a9\u067e\u0686\u0627 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a .',
        errors: { captcha: ['\u06a9\u067e\u0686\u0627 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a .'] },
        status_code: 422,
      });
    };
    const options = [
      'question 1',
      'question 2',
      'question 3',
    ];

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          htmlElementName="select"
          placeholder="یک گزینه را انتخاب کنید"
          register={register}
          control={control}
          defaultValue="question 2"
          label="select box"
          number={1}
          required={false}
        >
          {!!options && options.map((option, key) => (
            <SelectOption key={key} value={option} label={option} />
          ))}
        </Select>
      </form>
    );
  })
  .add('Select with placeholder', () => {
    const {
      register,
    } = useForm();
    return (
      <Select
        htmlElementName={text('optional htmlElementName', 'استان')}
        placeholder={text('optional placeholder', '__استان مورد نظر خود را انتخاب کنید__')}
        handleChange={action('trigger what you want to do in onChange function')}
        register={register}
      >
        <SelectOption value="20" label="کرج" />
        <SelectOption value="30" label="تهران" />
        <SelectOption value="40" label="فم" />
      </Select>
    );
  })
  .add('Full option Select(no placeholder)', () => {
    const {
      register,
    } = useForm();
    return (
      <Select
        htmlElementName={text('optional htmlElementName', 'استان')}
        defaultValue={text('optional defaultValue(if its not et or set wrong get the first option)', '30')}
        handleChange={action('trigger what you want to do in onChange function')}
        isDisabled={boolean('disabled(default : false)', false)}
        label={text('optional label', 'محل برگزاری رویداد')}
        number={3}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        register={register}
        required
      >
        <SelectOption value="20" label="کرج" />
        <SelectOption value="30" label="تهران" />
        <SelectOption value="40" label="فم" isDisabled />
      </Select>
    );
  })
  .add('Full option SelectOption', () => {
    const {
      register,
      control,
    } = useForm();
    return (
      <Select
        htmlElementName="استان"
        defaultValue="30"
        handleChange={action('trigger what you want to do in onChange function')}
        isDisabled={false}
        register={register}
        required
        control={control}
      >
        <SelectOption
          value={text('value', '20')}
          label={text('label', 'کرج')}
          isDisabled={boolean('disabled(default : false)', false)}
        />
        <SelectOption value="30" label="تهران" />
        <SelectOption value="40" label="فم" />
      </Select>
    );
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
