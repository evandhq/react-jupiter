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
import Toggle from '../toggle/toggle';

export default {
  title: 'Form-V7/Sample Form',
  component: 'form',

  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md',
      description: 'Applies to all form components',
    },
    selectPlaceholder: {
      control: 'text',
      defaultValue: 'یک گزینه را انتخاب کنید',
    },
    fileInputLabel: {
      control: 'text',
      defaultValue: 'بارگذاری فایل',
    },
    fileInputDescription: {
      control: 'text',
      defaultValue: 'حجم فایل ارسالی باید کمتر از ۴ مگابایت باشد',
    },
    fileInputDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    radioLabel: {
      control: 'text',
      defaultValue: 'مقطع تحصیلی',
    },
    radioDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    textInputLabel: {
      control: 'text',
      defaultValue: 'نام و نام خانوادگی',
    },
    textInputPlaceholder: {
      control: 'text',
      defaultValue: 'نام خود را وارد کنید',
    },
    textInputDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    passwordLabel: {
      control: 'text',
      defaultValue: 'رمز عبور',
    },
    textareaLabel: {
      control: 'text',
      defaultValue: 'توضیحات',
    },
    textareaPlaceholder: {
      control: 'text',
      defaultValue: 'توضیحات خود را وارد کنید',
    },
    textareaMinHeight: {
      control: 'number',
      defaultValue: 120,
    },
    checkboxLabel: {
      control: 'text',
      defaultValue: 'در کدام موضوع‌ها توانایی دارید؟',
    },
    checkboxDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    toggleLabel: {
      control: 'text',
      defaultValue: 'فعال‌سازی اعلان‌ها',
    },
    toggleDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    captchaLabel: {
      control: 'text',
      defaultValue: 'کد تصویری',
    },
  },
};

const Template = (args) => {
  const {
    register,
    handleSubmit,
    control,
    setError,
  } = useForm();

  const onSubmit = (data) => {
    action('form submitted')(data);
  };

  const selectOptions = [
    { value: 'q1', label: 'گزینه ۱' },
    { value: 'q2', label: 'گزینه ۲' },
    { value: 'q3', label: 'گزینه ۳' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg space-y-4">
      {/* Select / Dropdown */}
      <Select
        htmlElementName="select"
        placeholder={args.selectPlaceholder}
        register={register}
        control={control}
        label="انتخاب کنید"
        number={1}
        size={args.size}
      >
        {selectOptions.map((opt) => (
          <SelectOption key={opt.value} value={opt.value} label={opt.label} />
        ))}
      </Select>

      {/* File Input */}
      <FileInput
        htmlElementName="file-input"
        register={register}
        control={control}
        label={args.fileInputLabel}
        description={args.fileInputDescription}
        number={2}
        disabled={args.fileInputDisabled}
        size={args.size}
      />

      {/* Radio Group */}
      <Radio
        groupName="radio"
        label={args.radioLabel}
        number={3}
        register={register}
        control={control}
        size={args.size}
      >
        <RadioOption value="diplom" label="زیر دیپلم" />
        <RadioOption value="diploma" label="دیپلم" />
        <RadioOption value="bachelor" label="کارشناسی" />
        <RadioOption value="master" label="کارشناسی ارشد" />
        <RadioOption value="phd" label="دکترا" isDisabled={args.radioDisabled} />
      </Radio>

      {/* Text Input */}
      <TextInput
        htmlElementName="text-input"
        label={args.textInputLabel}
        number={4}
        register={register}
        control={control}
        placeholder={args.textInputPlaceholder}
        disabled={args.textInputDisabled}
        type="text"
        rtl
        size={args.size}
      />

      {/* Password Input */}
      <TextInput
        htmlElementName="password-input"
        label={args.passwordLabel}
        number={5}
        register={register}
        control={control}
        placeholder="رمز عبور خود را وارد کنید"
        type="password"
        rtl
        size={args.size}
      />

      {/* Textarea */}
      <Textarea
        register={register}
        control={control}
        label={args.textareaLabel}
        htmlElementName="textarea"
        placeholder={args.textareaPlaceholder}
        minHeight={args.textareaMinHeight}
        number={6}
        size={args.size}
      />

      {/* Checkbox Group */}
      <Checkbox
        groupName="checkbox"
        label={args.checkboxLabel}
        register={register}
        control={control}
        size={args.size}
      >
        <CheckboxOption value="sports" label="ورزشی" />
        <CheckboxOption value="science" label="علمی" />
        <CheckboxOption value="religious" label="مذهبی" />
        <CheckboxOption value="cultural" label="فرهنگی" />
        <CheckboxOption value="art" label="هنری" isDisabled={args.checkboxDisabled} />
      </Checkbox>

      {/* Toggle */}
      <Toggle
        name="toggle"
        label={args.toggleLabel}
        register={register}
        control={control}
        isDisabled={args.toggleDisabled}
        size={args.size}
      />

      {/* Captcha */}
      <Captcha
        register={register}
        control={control}
        label={args.captchaLabel}
        htmlElementName="captcha"
        imageUrl="https://static.evand.net/captcha/0bb5a9832be7b86a2a0a646ae2fd1649.jpg"
        fetchData={() => action('refresh captcha')()}
        size={args.size}
      />

      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        ثبت فرم
      </button>
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  selectPlaceholder: 'یک گزینه را انتخاب کنید',
  fileInputLabel: 'بارگذاری فایل',
  fileInputDescription: 'حجم فایل ارسالی باید کمتر از ۴ مگابایت باشد',
  fileInputDisabled: false,
  radioLabel: 'مقطع تحصیلی',
  radioDisabled: false,
  textInputLabel: 'نام و نام خانوادگی',
  textInputPlaceholder: 'نام خود را وارد کنید',
  textInputDisabled: false,
  passwordLabel: 'رمز عبور',
  textareaLabel: 'توضیحات',
  textareaPlaceholder: 'توضیحات خود را وارد کنید',
  textareaMinHeight: 120,
  checkboxLabel: 'در کدام موضوع‌ها توانایی دارید؟',
  checkboxDisabled: false,
  toggleLabel: 'فعال‌سازی اعلان‌ها',
  toggleDisabled: false,
  captchaLabel: 'کد تصویری',
};
