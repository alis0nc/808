import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/808/i);
  expect(headerElement).toBeInTheDocument();
});
