import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading message when data is not available', () => {
  render(<App />);
  const loadingMessage = screen.getByTestId('loading-message');
  expect(loadingMessage).toBeTruthy();
});
