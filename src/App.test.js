import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MR Education Site', () => {
  render(<App />);
  // const linkElement = screen.getAllByText(/M&R's Seamless Control Hub/i)[0];
  // expect(linkElement).toBeInTheDocument();
});
