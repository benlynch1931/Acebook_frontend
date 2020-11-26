import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('Finds elements in the app', () => {
  render(<App />);
  expect(screen.getByText('Sign Up')).toBeInTheDocument();
  expect(screen.getByText('Log In')).toBeInTheDocument();
});

it('Finds title in the app', () => {
  render(<App />);
  expect(screen.getByText('Welcome to Acebook')).toBeInTheDocument();
});
