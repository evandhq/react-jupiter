"use strict";require("@testing-library/jest-dom");
var _react = require("@testing-library/react");
require("jest-styled-components");

// Configure React Testing Library
(0, _react.configure)({
  testIdAttribute: 'data-testid',
  throwSuggestions: true
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});