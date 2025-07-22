import React from 'react';
import '../src/styles.css';
import { decorators } from './storybook-decorators.jsx';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      inlineStories: true,
    },
    interactions: {
      argTypesRegex: "^on[A-Z].*",
    },
  },
};

export { decorators };

export default preview; 