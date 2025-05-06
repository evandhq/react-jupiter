"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.PDFFile = exports.ImageFile = exports.DocumentFile = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'FileItem',
  component: _index.default,

  argTypes: {
    type: {
      control: 'select',
      options: ['zip', 'doc', 'rar', 'pdf', 'jpg', 'png', 'mp3', 'mp4', 'pptx', 'xlsx'],
      defaultValue: 'zip'
    },
    title: {
      control: 'text',
      defaultValue: 'فایل جلسه اول ما'
    },
    description: {
      control: 'text',
      defaultValue: 'متن توضیحات'
    },
    price: {
      control: 'text',
      defaultValue: '۶۰۰۰ تومن'
    },
    fileSize: {
      control: 'text',
      defaultValue: '۵ مگابایت'
    },
    onClick: {
      action: 'onClick'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  type: 'zip',
  title: 'فایل جلسه اول ما',
  description: 'متن توضیحات',
  price: '۶۰۰۰ تومن',
  fileSize: '۵ مگابایت',
  onClick: (0, _addonActions.action)('trigger what you want to do in onClick function')
};

const PDFFile = exports.PDFFile = Template.bind({});
PDFFile.args = {
  ...Default.args,
  type: 'pdf',
  title: 'فایل PDF'
};

const ImageFile = exports.ImageFile = Template.bind({});
ImageFile.args = {
  ...Default.args,
  type: 'jpg',
  title: 'تصویر',
  fileSize: '۲ مگابایت'
};

const DocumentFile = exports.DocumentFile = Template.bind({});
DocumentFile.args = {
  ...Default.args,
  type: 'doc',
  title: 'سند',
  description: 'فایل ورد'
};