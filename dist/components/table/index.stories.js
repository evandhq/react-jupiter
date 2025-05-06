"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithSorting = exports.WithActions = exports.Minimal = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));
var _icon = _interopRequireDefault(require("../icon"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const columns = [
{
  key: 'firstTitle',
  label: 'عنوان اول',
  dataType: 'text'
}];

const data = [
{
  key: 'firstRow',
  firstTitle: 'سارا'
}];


const columns02 = [
{
  key: 'firstTitle',
  label: 'عنوان اول',
  dataType: 'text'
},
{
  key: 'tirdTitle',
  label: 'عنوان سوم اینجا قرار می گیرد',
  dataType: 'node'
},
{
  key: 'forthTitle',
  label: 'عنوان چهارم',
  dataType: 'text'
}];


const columns03 = [
{
  key: 'firstTitle',
  label: 'نام',
  dataType: 'text'
},
{
  key: 'secoundTitle',
  label: 'نام خانوادگی',
  dataType: 'action'
},
{
  key: 'tirdTitle',
  label: 'سمت',
  dataType: 'node'
},
{
  key: 'forthTitle',
  label: 'سن',
  dataType: 'text'
},
{
  key: 'the5th',
  label: 'نوع نود',
  dataType: 'node'
}];


const data03 = [
{
  key: 'firstRow',
  firstTitle: 'سارا',
  tirdTitle: 'مدیر بازرگانی',
  wrongTitle: '۳۰ ساله',
  the5th: /*#__PURE__*/_react.default.createElement(_icon.default, { name: "watch-later", size: "lg" })
},
{
  key: 'the2ndRow',
  firstTitle: 'احمد',
  tirdTitle: 'آبدارجی',
  the5th: /*#__PURE__*/_react.default.createElement("a", { href: "http://evand.com" }, "\u0644\u06CC\u0646\u06A9 \u062A\u0633\u062A\u06CC"),
  forthTitle: '۵۵ ساله',
  status: 'yellow',
  callToActions: [
  {
    text: 'نایینی',
    props: { renderLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "http://google.com" }, element) }
  },
  {
    props: { renderLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "http://yahoo.com" }, element) },
    text: 'دومی'
  },
  {
    props: { renderLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "http://evand.com" }, element) },
    text: 'سومین مورد'
  },
  {
    props: { renderLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "http://evand.com" }, element) },
    text: ' بعدی'
  },
  {
    props: { renderLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "http://evand.com" }, element) },
    text: 'بعدیش مورد'
  }]

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
      renderLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "https://devhints.io/enzyme" }, element),
      disabled: true
    },
    text: 'زنگنه'
  }]

}];var _default = exports.default =


{
  title: 'Components/Table',
  component: _index.default,
  argTypes: {
    columns: {
      control: 'array',
      description: 'Array of column definitions'
    },
    data: {
      control: 'array',
      description: 'Array of data rows'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {
  columns: [
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  { id: 'city', label: 'City' }],

  data: [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' }]

};

const WithActions = exports.WithActions = Template.bind({});
WithActions.args = {
  columns: [
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  { id: 'city', label: 'City' },
  { id: 'actions', label: 'Actions' }],

  data: [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' }],

  renderActions: (row) => /*#__PURE__*/
  _react.default.createElement("div", null, /*#__PURE__*/
  _react.default.createElement(_icon.default, { name: "edit", size: "small" }), /*#__PURE__*/
  _react.default.createElement(_icon.default, { name: "delete", size: "small" })
  )

};

const WithSorting = exports.WithSorting = Template.bind({});
WithSorting.args = {
  columns: [
  { id: 'name', label: 'Name', sortable: true },
  { id: 'age', label: 'Age', sortable: true },
  { id: 'city', label: 'City', sortable: true }],

  data: [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' }],

  onSort: (columnId, direction) => {
    console.log(`Sorting ${columnId} in ${direction} direction`);
  }
};