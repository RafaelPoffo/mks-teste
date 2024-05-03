import { SidebarItem } from '@/components/Sidebar/SidebarItem/SidebarItem';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

test('renders sidebar item with product details', () => {
  const mockCart = [
    {
      id: 1,
      photo: '/path/to/photo.jpg',
      name: 'Product Name',
      qtd: 2,
      totalPrice: '10.00',
    },
  ];
  const mockAddToCart = jest.fn();
  const mockRemoveFromCart = jest.fn();
  const mockRemoveProductQuantity = jest.fn();

  jest.mock('@/src/context/CartContext', () => ({
    useCart: () => ({
      cart: mockCart,
      addToCart: mockAddToCart,
      removeFromCart: mockRemoveFromCart,
      removeProductQuantity: mockRemoveProductQuantity,
    }),
  }));

  render(<SidebarItem />);

  expect(screen.getByAltText('Product Name')).toBeInTheDocument();
  expect(screen.getByText('Product Name')).toBeInTheDocument();
  expect(screen.getByText('Qtd:')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('R$10,00')).toBeInTheDocument();

  const addButton = screen.getByRole('button', { name: '+' });
  const removeButton = screen.getByRole('button', { name: '-' });
  const removeProductButton = screen.getByRole('button', { name: 'X' });

  expect(addButton).toBeInTheDocument();
  expect(removeButton).toBeInTheDocument();
  expect(removeProductButton).toBeInTheDocument();

  fireEvent.click(addButton);
  fireEvent.click(removeButton);
  fireEvent.click(removeProductButton);

  expect(mockAddToCart).toHaveBeenCalledTimes(1);
  expect(mockRemoveProductQuantity).toHaveBeenCalledTimes(1);
  expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
});
