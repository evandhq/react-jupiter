import React from 'react';
import { render, screen } from '../../test-utils';
import Avatar from './index';

describe('Avatar', () => {
  it('renders avatar component', () => {
    render(<Avatar data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
});
