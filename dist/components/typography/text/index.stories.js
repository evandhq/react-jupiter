"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Uppercase = exports.Underlined = exports.Strikethrough = exports.Small = exports.PreWrap = exports.Nowrap = exports.Large = exports.Italic = exports.Ellipsis = exports.Default = exports.CustomLineHeight = exports.CustomLetterSpacing = exports.CombinedStyles = exports.Colored = exports.Bold = exports.AlignedCenter = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =

{
  title: 'Components/Typography/Text',
  component: _index.default,
  argTypes: {
    color: {
      control: 'color',
      description: 'Color of the text'
    },
    size: {
      control: 'number',
      description: 'Size of the text in pixels'
    },
    underline: {
      control: 'boolean',
      description: 'Whether the text should be underlined'
    },
    bold: {
      control: 'boolean',
      description: 'Whether the text should be bold'
    },
    lineThrough: {
      control: 'boolean',
      description: 'Whether the text should have a line through it'
    },
    strong: {
      control: 'boolean',
      description: 'Whether the text should be strong'
    },
    emphasized: {
      control: 'boolean',
      description: 'Whether the text should be emphasized'
    },
    subScript: {
      control: 'boolean',
      description: 'Whether the text should be subscript'
    },
    supScript: {
      control: 'boolean',
      description: 'Whether the text should be superscript'
    },
    label: {
      control: 'boolean',
      description: 'Whether the text should be styled as a label'
    },
    marked: {
      control: 'boolean',
      description: 'Whether the text should be marked'
    },
    children: {
      control: 'text',
      description: 'Text content'
    },
    italic: {
      control: 'boolean',
      description: 'Whether the text should be italic'
    },
    strikethrough: {
      control: 'boolean',
      description: 'Whether the text should have a strikethrough'
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment'
    },
    transform: {
      control: 'select',
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
      description: 'Text transformation'
    },
    lineHeight: {
      control: 'number',
      description: 'Line height of the text'
    },
    letterSpacing: {
      control: 'number',
      description: 'Letter spacing of the text'
    },
    textOverflow: {
      control: 'select',
      options: ['clip', 'ellipsis'],
      description: 'How to handle overflowing text'
    },
    whiteSpace: {
      control: 'select',
      options: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
      description: 'How to handle white space'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const Default = exports.Default = Template.bind({});
Default.args = {
  children: 'This is default text'
};

const Small = exports.Small = Template.bind({});
Small.args = {
  size: 12,
  children: 'This is small text'
};

const Large = exports.Large = Template.bind({});
Large.args = {
  size: 24,
  children: 'This is large text'
};

const Colored = exports.Colored = Template.bind({});
Colored.args = {
  color: '#2196F3',
  children: 'This text is blue'
};

const Bold = exports.Bold = Template.bind({});
Bold.args = {
  bold: true,
  children: 'This text is bold'
};

const Italic = exports.Italic = Template.bind({});
Italic.args = {
  italic: true,
  children: 'This text is italic'
};

const Underlined = exports.Underlined = Template.bind({});
Underlined.args = {
  underline: true,
  children: 'This text is underlined'
};

const Strikethrough = exports.Strikethrough = Template.bind({});
Strikethrough.args = {
  strikethrough: true,
  children: 'This text has a strikethrough'
};

const AlignedCenter = exports.AlignedCenter = Template.bind({});
AlignedCenter.args = {
  align: 'center',
  children: 'This text is centered'
};

const Uppercase = exports.Uppercase = Template.bind({});
Uppercase.args = {
  transform: 'uppercase',
  children: 'This text is uppercase'
};

const CustomLineHeight = exports.CustomLineHeight = Template.bind({});
CustomLineHeight.args = {
  lineHeight: 1.8,
  children: 'This text has custom line height'
};

const CustomLetterSpacing = exports.CustomLetterSpacing = Template.bind({});
CustomLetterSpacing.args = {
  letterSpacing: 2,
  children: 'This text has custom letter spacing'
};

const Ellipsis = exports.Ellipsis = Template.bind({});
Ellipsis.args = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  style: { width: '150px', border: '1px solid #ccc' },
  children: 'This text will overflow and show ellipsis'
};

const Nowrap = exports.Nowrap = Template.bind({});
Nowrap.args = {
  whiteSpace: 'nowrap',
  children: 'This text will not wrap'
};

const PreWrap = exports.PreWrap = Template.bind({});
PreWrap.args = {
  whiteSpace: 'pre-wrap',
  children: 'This text preserves     white space and wraps'
};

const CombinedStyles = exports.CombinedStyles = Template.bind({});
CombinedStyles.args = {
  size: 18,
  color: '#FF5722',
  bold: true,
  italic: true,
  align: 'right',
  children: 'Combined styles example'
};