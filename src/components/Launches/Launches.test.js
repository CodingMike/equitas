import React from 'react';
import { render } from '@testing-library/react';
import Launches from './index';

test('displays launch details', () => {
  const mockLaunches = [
    {
      id: 1,
      name: 'Launch 1',
      links: { patch: { small: 'image1.jpg' } },
      rocket: { name: 'Rocket 1', description: 'Description of Rocket 1' },
    },
    {
      id: 2,
      name: 'Launch 2',
      links: { patch: { small: 'image2.jpg' } },
      rocket: { name: 'Rocket 2', description: 'Description of Rocket 2' },
    },
  ];

  render(<Launches launches={mockLaunches} />);
});
