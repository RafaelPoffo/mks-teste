import { Sidebar } from '@/components/Sidebar/Sidebar';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

test('renders sidebar with total price and finish button', () => {
  render(<Sidebar isOpen={true} onClose={() => {}} />);

  expect(screen.getByText('Carrinho de compras')).toBeInTheDocument();

  const closeButton = screen.getByRole('button', { name: 'Close sidebar' });
  expect(closeButton).toBeInTheDocument();

  expect(screen.getByText('Total:')).toBeInTheDocument();

  const finishButton = screen.getByRole('button', { name: 'Finalizar Compra' });
  expect(finishButton).toBeInTheDocument();

  fireEvent.click(finishButton);
});
