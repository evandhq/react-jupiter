"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Default = exports.CustomSize = exports.CustomColor = exports.Bold = void 0;var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Paragraph',
  component: _index.default,

  argTypes: {
    color: {
      control: 'select',
      options: ['riverBedDark', 'riverBed'],
      defaultValue: 'riverBedDark'
    },
    bold: {
      control: 'boolean',
      defaultValue: false
    },
    size: {
      control: 'text',
      defaultValue: '13'
    },
    children: {
      control: 'text',
      defaultValue: 'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  color: 'riverBedDark',
  bold: false,
  size: '13',
  children: 'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی'
};

const Bold = exports.Bold = Template.bind({});
Bold.args = {
  ...Default.args,
  bold: true
};

const CustomSize = exports.CustomSize = Template.bind({});
CustomSize.args = {
  ...Default.args,
  size: '16'
};

const CustomColor = exports.CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  color: 'riverBed'
};