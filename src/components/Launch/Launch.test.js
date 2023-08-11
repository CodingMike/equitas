import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Launch from './index';

const mockLaunch = {
  id: '123',
  name: 'Test Launch',
  links: {
    patch: {
      small: 'test-image-url',
    },
  },
  flight_number: 1,
  date_utc: '2023-08-10T12:00:00Z',
  rocket: {
    name: 'Falcon 9',
    description: 'Test Rocket',
  },
};

test('renders launch name', () => {
  render(<Launch launch={mockLaunch} />);

  expect(screen.getByText('Test Launch')).toBeInTheDocument();
});

test('renders "More info" text', () => {
  render(<Launch launch={mockLaunch} />);

  expect(screen.getByText('More info')).toBeInTheDocument();
});

test('initially renders collapsed content', () => {
  render(<Launch launch={mockLaunch} />);

  expect(screen.queryByText('Flight Number:')).toBeNull();
  expect(screen.queryByText('Launch Date:')).toBeNull();
  expect(screen.queryByText('Rocket:')).toBeNull();
  expect(screen.queryByText('Description:')).toBeNull();
});
