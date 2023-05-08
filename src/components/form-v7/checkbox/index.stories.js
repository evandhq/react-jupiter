import React from 'react';
import { useForm } from 'react-hook-form';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';
import Checkbox from './checkbox';
import CheckboxOption from './checkbox-option';

storiesOf('Form-V7/Checkbox', module)
  .add('Minimal Form/Checkbox', () => {
    const {
      register,
    } = useForm();
    return (
      <Checkbox register={register}>
        <CheckboxOption value="first" label="First Value"handleOnchange={e => console.log(e)} />
        <CheckboxOption value="sec" label="Sec Value"handleOnchange={e => console.log(e)} />
        <CheckboxOption value="third" label="Third Value"handleOnchange={e => console.log(e.target.checked)} />
    </Checkbox>
    )
  })
  .add('Full option Checkbox', () => {
    const {
      register,
    } = useForm();
    return ( 
      <Checkbox
        groupName={text('optional groupName(but highly recommended to set manually)', 'degree')}
        label={text('optional label', 'در کدام موضوع ها توانایی دارید')}
        handleChange={action('trigger what you want to do in onChange function')}
        isDisabled={boolean('optional disabled all', false)}
        type={select('optional type', ['horizontal', 'vertical'])}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        required={true}
        register={register}
      >
        <CheckboxOption value="100" label="ورزشی"/>
        <CheckboxOption value="234" label="علمی"/>
        <CheckboxOption value="300" label="مذهبی"/>
        <CheckboxOption value="400" label="فرهنگی" isChecked/>
        <CheckboxOption value="500" label="هنری" isChecked/>
      </Checkbox>
    )
  })
  .add('Full option CheckboxOption', () => {
    const {
      register,
    } = useForm();
    return (
      <Checkbox
        groupName="degree"
        required={true}
        label="در کدام موضوع ها توانایی دارید"
        register={register}
      >
        <CheckboxOption
          label={text('label', 'ورزشی')}
          value={text('value', '100')}
          isDisabled={boolean('optional disabled item', false)}
          isChecked={boolean('optional checked item', false)}
          register={register}
        />
        <CheckboxOption value="200" label="علمی"/>
        <CheckboxOption value="300" label="مذهبی"/>
        <CheckboxOption value="400" label="فرهنگی"/>
        <CheckboxOption value="500" label="هنری"/>
      </Checkbox>
    )
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
