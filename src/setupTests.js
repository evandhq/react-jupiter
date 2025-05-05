import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import 'jest-styled-components';

// Configure React Testing Library
configure({ 
  testIdAttribute: 'data-testid',
  throwSuggestions: true
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
}); 