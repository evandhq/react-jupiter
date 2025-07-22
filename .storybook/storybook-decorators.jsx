// .storybook/storybook-decorators.jsx
import React from 'react';

export const decorators = [
  (Story) => (
    <div className="p-4">
      <Story />
    </div>
  ),
];
