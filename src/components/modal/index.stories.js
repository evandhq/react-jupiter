import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import Modal from './index';

export default {
  title: 'Modal',
  component: Modal,
  
  argTypes: {
    modalWidth: {
      control: 'text',
      defaultValue: '30%',
    },
    modalWidthMobile: {
      control: 'text',
      defaultValue: '80%',
    },
    hasCloseButton: {
      control: 'boolean',
      defaultValue: true,
    },
    disabledClose: {
      control: 'boolean',
      defaultValue: false,
    },
    isOpen: {
      control: 'boolean',
      defaultValue: true,
    },
    onRequestClose: {
      action: 'onRequestClose',
    },
    onAfterOpen: {
      action: 'onAfterOpen',
    },
  },
};

const Template = (args) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>نمایش مودال</button>
      <div>
        <article>
          <p>لورم ایپسوم متن ساختگی</p>
        </article>
      </div>
      <Modal {...args} isOpen={show} onRequestClose={() => setShow(false)}>
        <h1>سلام</h1>
        <p>این یک نمونه است</p>
      </Modal>
    </div>
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  modalWidth: '30%',
  modalWidthMobile: '80%',
  hasCloseButton: true,
  disabledClose: false,
};

export const FullOptions = Template.bind({});
FullOptions.args = {
  modalWidth: '100px',
  modalWidthMobile: '80%',
  hasCloseButton: true,
  disabledClose: false,
  onRequestClose: action('trigger what you want to do in onRequestClose function'),
  onAfterOpen: action('trigger what you want to do in onAfterOpen function'),
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  ...Minimal.args,
  hasCloseButton: false,
};

export const DisabledClose = Template.bind({});
DisabledClose.args = {
  ...Minimal.args,
  disabledClose: true,
};
