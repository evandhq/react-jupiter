import React from 'react';

import Paragraph from './index';

export default {
  title: 'Paragraph',
  component: Paragraph,
  
  argTypes: {
    color: {
      control: 'select',
      options: ['riverBedDark', 'riverBed'],
      defaultValue: 'riverBedDark',
    },
    bold: {
      control: 'boolean',
      defaultValue: false,
    },
    size: {
      control: 'text',
      defaultValue: '13',
    },
    children: {
      control: 'text',
      defaultValue: 'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی',
    },
  },
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'riverBedDark',
  bold: false,
  size: '13',
  children: 'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی',
};

export const Bold = Template.bind({});
Bold.args = {
  ...Default.args,
  bold: true,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  ...Default.args,
  size: '16',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  color: 'riverBed',
};
