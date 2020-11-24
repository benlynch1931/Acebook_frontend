import { render, screen } from '@testing-library/react';
import App from './App';

test('pulls through test info', () => {
  render(<App />);
  expect("tabledata").toBeInTheDocument();
});
