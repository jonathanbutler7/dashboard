import { render, screen } from '@testing-library/react';
import ToTop from './ToTop';

test('renders learn react link', () => {
  render(<ToTop />);
  const linkElement = screen.getByText(/to top/i);
  expect(linkElement).toBeInTheDocument();
});
