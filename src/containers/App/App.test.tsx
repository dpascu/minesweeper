import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const thing = render(<App />);
  expect(thing).toMatchSnapshot();
});
