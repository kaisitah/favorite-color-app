import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text Choose your favorite color', () => {
  render(<App />);
  const textElement = screen.getByText(/choose your favorite color/i);
  expect(textElement).toBeInTheDocument();
});
