import React from 'react';
import Table from './index';
import Icon from '../icon';

const columns = [
  {
    key: 'firstTitle',
    label: 'عنوان اول',
    dataType: 'text',
  },
];
const data = [
  {
    key: 'firstRow',
    firstTitle: 'سارا',
  },
];

const columns02 = [
  {
    key: 'firstTitle',
    label: 'عنوان اول',
    dataType: 'text',
  },
  {
    key: 'tirdTitle',
    label: 'عنوان سوم اینجا قرار می گیرد',
    dataType: 'node',
  },
  {
    key: 'forthTitle',
    label: 'عنوان چهارم',
    dataType: 'text',
  },
];

const columns03 = [
  {
    key: 'firstTitle',
    label: 'نام',
    dataType: 'text',
  },
  {
    key: 'secoundTitle',
    label: 'نام خانوادگی',
    dataType: 'action',
  },
  {
    key: 'tirdTitle',
    label: 'سمت',
    dataType: 'node',
  },
  {
    key: 'forthTitle',
    label: 'سن',
    dataType: 'text',
  },
  {
    key: 'the5th',
    label: 'نوع نود',
    dataType: 'node',
  },
];

const data03 = [
  {
    key: 'firstRow',
    firstTitle: 'سارا',
    tirdTitle: 'مدیر بازرگانی',
    wrongTitle: '۳۰ ساله',
    the5th: (<Icon name="watch-later" size="lg" />),
  },
  {
    key: 'the2ndRow',
    firstTitle: 'احمد',
    tirdTitle: 'آبدارجی',
    the5th: (<a href="http://evand.com">لینک تستی</a>),
    forthTitle: '۵۵ ساله',
    status: 'yellow',
    callToActions: [
      {
        text: 'نایینی',
        props: { renderLink: (element) => <a href="http://google.com">{element}</a> },
      },
      {
        props: { renderLink: (element) => <a href="http://yahoo.com">{element}</a> },
        text: 'دومی',
      },
      {
        props: { renderLink: (element) => <a href="http://evand.com">{element}</a> },
        text: 'سومین مورد',
      },
      {
        props: { renderLink: (element) => <a href="http://evand.com">{element}</a> },
        text: ' بعدی',
      },
      {
        props: { renderLink: (element) => <a href="http://evand.com">{element}</a> },
        text: 'بعدیش مورد',
      },
    ],
  },
  {
    status: 'green',
    key: 'the3hRow',
    firstTitle: 'زهرا',
    tirdTitle: 'مدیر فروش',
    forthTitle: '۲۰ ساله',
    callToActions: [
      {
        props: {
          renderLink: (element) => <a href="https://devhints.io/enzyme">{element}</a>,
          disabled: true,
        },
        text: 'زنگنه',
      },
    ],
  },
];

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    columns: {
      control: 'array',
      description: 'Array of column definitions',
    },
    data: {
      control: 'array',
      description: 'Array of data rows',
    },
  },
};

const Template = (args) => <Table {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {
  columns: [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'city', label: 'City' },
  ],
  data: [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
  ],
};

export const WithActions = Template.bind({});
WithActions.args = {
  columns: [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'city', label: 'City' },
    { id: 'actions', label: 'Actions' },
  ],
  data: [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
  ],
  renderActions: (row) => (
    <div>
      <Icon name="edit" size="small" />
      <Icon name="delete" size="small" />
    </div>
  ),
};

export const WithSorting = Template.bind({});
WithSorting.args = {
  columns: [
    { id: 'name', label: 'Name', sortable: true },
    { id: 'age', label: 'Age', sortable: true },
    { id: 'city', label: 'City', sortable: true },
  ],
  data: [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
  ],
  onSort: (columnId, direction) => {
    console.log(`Sorting ${columnId} in ${direction} direction`);
  },
};
