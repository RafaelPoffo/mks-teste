import { Header } from '@/components/Header/Header';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

test('renders header with total products and sidebar', () => {
  render(<Header />);

  expect(screen.getByText('MKS Sistemas')).toBeInTheDocument();

  expect(screen.getByText('0')).toBeInTheDocument();

  const headerButton = screen.getByRole('button', { name: 'Open sidebar' });
  expect(headerButton).toBeInTheDocument();

  fireEvent.click(headerButton);

  const sidebar = screen.getByTestId('sidebar');
  expect(sidebar).toBeInTheDocument();

  const closeButton = screen.getByRole('button', { name: 'Close sidebar' });
  fireEvent.click(closeButton);

  expect(sidebar).not.toBeInTheDocument();
});
