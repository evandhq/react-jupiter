import React from 'react';

import { action } from '@storybook/addon-actions';
import FileItem from './index';

export default {
  title: 'FileItem',
  component: FileItem,
  
  argTypes: {
    type: {
      control: 'select',
      options: ['zip', 'doc', 'rar', 'pdf', 'jpg', 'png', 'mp3', 'mp4', 'pptx', 'xlsx'],
      defaultValue: 'zip',
    },
    title: {
      control: 'text',
      defaultValue: 'فایل جلسه اول ما',
    },
    description: {
      control: 'text',
      defaultValue: 'متن توضیحات',
    },
    price: {
      control: 'text',
      defaultValue: '۶۰۰۰ تومن',
    },
    fileSize: {
      control: 'text',
      defaultValue: '۵ مگابایت',
    },
    onClick: {
      action: 'onClick',
    },
  },
};

const Template = (args) => <FileItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'zip',
  title: 'فایل جلسه اول ما',
  description: 'متن توضیحات',
  price: '۶۰۰۰ تومن',
  fileSize: '۵ مگابایت',
  onClick: action('trigger what you want to do in onClick function'),
};

export const PDFFile = Template.bind({});
PDFFile.args = {
  ...Default.args,
  type: 'pdf',
  title: 'فایل PDF',
};

export const ImageFile = Template.bind({});
ImageFile.args = {
  ...Default.args,
  type: 'jpg',
  title: 'تصویر',
  fileSize: '۲ مگابایت',
};

export const DocumentFile = Template.bind({});
DocumentFile.args = {
  ...Default.args,
  type: 'doc',
  title: 'سند',
  description: 'فایل ورد',
};
