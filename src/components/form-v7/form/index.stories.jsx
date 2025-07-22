import React from 'react';

import { useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';
import { Select, SelectOption } from '../dropdown';
import FileInput from '../file-input';
import RadioOption from '../radio/radio-option';
import Radio from '../radio/radio';
import TextInput from '../text-input';
import Textarea from '../textarea';
import Checkbox from '../checkbox/checkbox';
import CheckboxOption from '../checkbox/checkbox-option';
import Captcha from '../captcha';

export default {
  title: 'Form-V7/Sample Form',
  component: 'form',
  
  argTypes: {
    fileInputLabel: {
      control: 'text',
      defaultValue: 'این لیبل است',
    },
    fileInputPlaceholder: {
      control: 'text',
      defaultValue: 'متن پیشفرض',
    },
    fileInputDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    fileInputErrorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا',
    },
    radioLabel: {
      control: 'text',
      defaultValue: 'زیر دیپلم',
    },
    radioValue: {
      control: 'text',
      defaultValue: '100',
    },
    radioDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    textInputLabel: {
      control: 'text',
      defaultValue: 'این لیبل است',
    },
    textInputPlaceholder: {
      control: 'text',
      defaultValue: 'متن پیشفرض',
    },
    textInputDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    textInputErrorMessage: {
      control: 'text',
      defaultValue: 'ارور زیبا',
    },
    textInputType: {
      control: 'select',
      options: ['text', 'password'],
      defaultValue: 'text',
    },
    textareaLabel: {
      control: 'text',
      defaultValue: 'توضیجات',
    },
    textareaHtmlElementName: {
      control: 'text',
      defaultValue: 'textarea-box',
    },
    textareaPlaceholder: {
      control: 'text',
      defaultValue: 'این پلیس هولدر است',
    },
    textareaMinHeight: {
      control: 'text',
      defaultValue: '120',
    },
    checkboxLabel: {
      control: 'text',
      defaultValue: 'ورزشی',
    },
    checkboxValue: {
      control: 'text',
      defaultValue: '100',
    },
    checkboxDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    checkboxChecked: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

const Template = (args) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
  } = useForm();

  const onSubmit = (data) => {
    setError({
      message: 'کپچا معتبر نیست .',
      errors: { captcha: ['کپچا معتبر نیست .'] },
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
        defaultValue={0}
        label="select box"
        number={1}
        required={false}
      >
        {!!options && options.map((option, key) => (
          <SelectOption key={key} value={option} label={option} />
        ))}
      </Select>

      <FileInput
        htmlElementName="file-input"
        register={register}
        control={control}
        label={args.fileInputLabel}
        description="حجم فایل ارسالی باید کمتر از ۴ مگابایت باشد"
        number={2}
        placeholder={args.fileInputPlaceholder}
        disabled={args.fileInputDisabled}
        errorMessage={args.fileInputErrorMessage}
        required={false}
      />

      <Radio
        groupName="radio"
        label="radio input"
        number={3}
        register={register}
        control={control}
        required={false}
      >
        <RadioOption
          label={args.radioLabel}
          value={args.radioValue}
          isDisabled={args.radioDisabled}
        />
        <RadioOption value="200" label="دیپلم" />
        <RadioOption value="300" label="کارشناسی" />
        <RadioOption value="400" label="کارشناسی ارشد" />
        <RadioOption value="500" label="دکترا" />
      </Radio>

      <TextInput
        htmlElementName="text-input"
        required={false}
        label={args.textInputLabel}
        number={23}
        register={register}
        control={control}
        placeholder={args.textInputPlaceholder}
        disabled={args.textInputDisabled}
        errorMessage={args.textInputErrorMessage}
        type={args.textInputType}
        rtl
      />

      <TextInput
        htmlElementName="text-input"
        type="password"
        required={false}
        label={args.textInputLabel}
        number={23}
        register={register}
        control={control}
        placeholder={args.textInputPlaceholder}
        disabled={args.textInputDisabled}
        errorMessage={args.textInputErrorMessage}
        rtl
      />

      <Textarea
        register={register}
        control={control}
        label={args.textareaLabel}
        htmlElementName={args.textareaHtmlElementName}
        placeholder={args.textareaPlaceholder}
        minHeight={args.textareaMinHeight}
        isDisabled={false}
        required={false}
        resize="both"
        handleChange={action('trigger what you want to do in onChange function')}
        defaultValue="این یک باکس متنی می‌باشد"
      />

      <Checkbox
        groupName="checkbox"
        required={false}
        label="در کدام موضوع ها توانایی دارید"
        register={register}
        control={control}
      >
        <CheckboxOption
          label={args.checkboxLabel}
          value={args.checkboxValue}
          isDisabled={args.checkboxDisabled}
          isChecked={args.checkboxChecked}
          register={register}
        />
        <CheckboxOption value="200" label="علمی" />
        <CheckboxOption value="300" label="مذهبی" />
        <CheckboxOption value="400" label="فرهنگی" />
        <CheckboxOption value="500" label="هنری" />
      </Checkbox>

      <Captcha
        register={register}
        control={control}
        label="کد تصویری"
        htmlElementName="captcha"
        imageUrl="https://static.evand.net/captcha/0bb5a9832be7b86a2a0a646ae2fd1649.jpg"
        handleChange={action('trigger what you want to do in onChange function')}
        fetchData={() => console.log('fetching')}
        setValue={setValue}
      />

      <button type="submit">submit</button>
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  fileInputLabel: 'این لیبل است',
  fileInputPlaceholder: 'متن پیشفرض',
  fileInputDisabled: false,
  fileInputErrorMessage: 'ارور زیبا',
  radioLabel: 'زیر دیپلم',
  radioValue: '100',
  radioDisabled: false,
  textInputLabel: 'این لیبل است',
  textInputPlaceholder: 'متن پیشفرض',
  textInputDisabled: false,
  textInputErrorMessage: 'ارور زیبا',
  textInputType: 'text',
  textareaLabel: 'توضیجات',
  textareaHtmlElementName: 'textarea-box',
  textareaPlaceholder: 'این پلیس هولدر است',
  textareaMinHeight: '120',
  checkboxLabel: 'ورزشی',
  checkboxValue: '100',
  checkboxDisabled: false,
  checkboxChecked: false,
};
