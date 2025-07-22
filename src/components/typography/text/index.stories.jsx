import React from 'react';
import Text from './index';

export default {
  title: 'Components/Typography/Text',
  component: Text,
  argTypes: {
    color: {
      control: 'color',
      description: 'Color of the text',
    },
    size: {
      control: 'number',
      description: 'Size of the text in pixels',
    },
    underline: {
      control: 'boolean',
      description: 'Whether the text should be underlined',
    },
    bold: {
      control: 'boolean',
      description: 'Whether the text should be bold',
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
      description: 'Text content',
    },
    italic: {
      control: 'boolean',
      description: 'Whether the text should be italic',
    },
    strikethrough: {
      control: 'boolean',
      description: 'Whether the text should have a strikethrough',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    transform: {
      control: 'select',
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
      description: 'Text transformation',
    },
    lineHeight: {
      control: 'number',
      description: 'Line height of the text',
    },
    letterSpacing: {
      control: 'number',
      description: 'Letter spacing of the text',
    },
    textOverflow: {
      control: 'select',
      options: ['clip', 'ellipsis'],
      description: 'How to handle overflowing text',
    },
    whiteSpace: {
      control: 'select',
      options: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
      description: 'How to handle white space',
    }
  }
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is default text',
};

export const Small = Template.bind({});
Small.args = {
  size: 12,
  children: 'This is small text',
};

export const Large = Template.bind({});
Large.args = {
  size: 24,
  children: 'This is large text',
};

export const Colored = Template.bind({});
Colored.args = {
  color: '#2196F3',
  children: 'This text is blue',
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
  children: 'This text is bold',
};

export const Italic = Template.bind({});
Italic.args = {
  italic: true,
  children: 'This text is italic',
};

export const Underlined = Template.bind({});
Underlined.args = {
  underline: true,
  children: 'This text is underlined',
};

export const Strikethrough = Template.bind({});
Strikethrough.args = {
  strikethrough: true,
  children: 'This text has a strikethrough',
};

export const AlignedCenter = Template.bind({});
AlignedCenter.args = {
  align: 'center',
  children: 'This text is centered',
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  transform: 'uppercase',
  children: 'This text is uppercase',
};

export const CustomLineHeight = Template.bind({});
CustomLineHeight.args = {
  lineHeight: 1.8,
  children: 'This text has custom line height',
};

export const CustomLetterSpacing = Template.bind({});
CustomLetterSpacing.args = {
  letterSpacing: 2,
  children: 'This text has custom letter spacing',
};

export const Ellipsis = Template.bind({});
Ellipsis.args = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  style: { width: '150px', border: '1px solid #ccc' },
  children: 'This text will overflow and show ellipsis',
};

export const Nowrap = Template.bind({});
Nowrap.args = {
  whiteSpace: 'nowrap',
  children: 'This text will not wrap',
};

export const PreWrap = Template.bind({});
PreWrap.args = {
  whiteSpace: 'pre-wrap',
  children: 'This text preserves     white space and wraps',
};

export const CombinedStyles = Template.bind({});
CombinedStyles.args = {
  size: 18,
  color: '#FF5722',
  bold: true,
  italic: true,
  align: 'right',
  children: 'Combined styles example',
};
