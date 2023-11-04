import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
import { useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';
import { Select, SelectOption } from '../dropdown';
import FileInput from '../file-input';
import { Margin } from '../../spacing';
import RadioOption from '../radio/radio-option';
import Radio from '../radio/radio';
import TextInput from '../text-input';
import Textarea from '../textarea';
import Checkbox from '../checkbox/checkbox';
import CheckboxOption from '../checkbox/checkbox-option';
import Captcha from '../captcha';

storiesOf('Form-V7/Sample Form', module)
  .add('Sample Form', () => {
    const {
      register,
      handleSubmit,
      control,
      setValue,
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
          defaultValue={0}
          label="select box"
          number={1}
          required={false}
        >
          {!!options && options.map((option, key) => (
            <SelectOption key={key} value={option} label={option} />
          ))}
        </Select>

        <Margin top={8}>
          <FileInput
            htmlElementName="file-input"
            register={register}
            control={control}
            label={text('optional label', 'این لیبل است')}
            description="حجم فایل ارسالی باید کمتر از ۴ مگابایت باشد"
            number={2}
            placeholder={text('optional placeholder', 'متن پیشفرض')}
            disabled={boolean('disabled(default : false)', false)}
            errorMessage={text('optional error msg', 'ارور زیبا')}
            required={false}
          />
        </Margin>

        <Margin top={8}>
          <Radio
            groupName="radio"
            label="radio input"
            number={3}
            register={register}
            control={control}
            required={false}
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
        </Margin>

        <Margin top={8}>
          <TextInput
            htmlElementName="text-input"
            required={false}
            label={text('optional label', 'این لیبل است')}
            number={23}
            register={register}
            control={control}
            placeholder={text('optional placeholder', 'متن پیشفرض')}
            disabled={boolean('disabled(default : false)', false)}
            errorMessage={text('optional error msg', 'ارور زیبا')}
            type={select('select type(default : text)', ['text', 'password'])}
            rtl
          />
        </Margin>

        <Margin top={8}>
          <Textarea
            register={register}
            control={control}
            label={text('optional label', 'توضیجات')}
            htmlElementName={text('optional html-element-name', 'textarea-box')}
            placeholder={text('optional placeholder', 'این پلیس هولدر است')}
            minHeight={text('optional minHeight (it should be a number)', '120')}
            isDisabled={false}
            required={false}
            resize="both"
            handleChange={action('trigger what you want to do in onChange function')}
            defaultValue="این یک باکس متنی می‌باشد"
          />
        </Margin>

        <Margin top={8}>
          <Checkbox
            groupName="checkbox"
            required={false}
            label="در کدام موضوع ها توانایی دارید"
            register={register}
            control={control}
          >
            <CheckboxOption
              label={text('label', 'ورزشی')}
              value={text('value', '100')}
              isDisabled={boolean('optional disabled item', false)}
              isChecked={boolean('optional checked item', false)}
              register={register}
            />
            <CheckboxOption value="200" label="علمی" />
            <CheckboxOption value="300" label="مذهبی" />
            <CheckboxOption value="400" label="فرهنگی" />
            <CheckboxOption value="500" label="هنری" />
          </Checkbox>
        </Margin>

        <Margin top={8}>
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
        </Margin>

        <Margin top={8}>
          <button type="submit">submit</button>
        </Margin>
      </form>
    );
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
