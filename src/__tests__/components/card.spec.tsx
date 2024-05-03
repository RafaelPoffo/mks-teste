import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CartProvider, Product } from '@/context/CartContext';
import { Card } from '@/components/Card/Card';

describe('Card component', () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: '100.00',
      photo:
        'http://localhost:3000/_next/image?url=https%3A%2F%…anspaces.com%2Fproducts%2Fipadair.webp&w=256&q=75',
      qtd: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: 'Product 2',
      price: '200.00',
      photo:
        'http://localhost:3000/_next/image?url=https%3A%2F%…anspaces.com%2Fproducts%2Fipadair.webp&w=256&q=75',
      qtd: 0,
      totalPrice: 0,
    },
  ];

  it('renders products correctly', () => {
    const { getByText, getAllByRole } = render(
      <CartProvider>
        <Card data={products} />
      </CartProvider>,
    );

    products.forEach((product) => {
      expect(getByText(product.name)).toBeInTheDocument();
    });

    const buyButtons = getAllByRole('button', { name: 'Comprar' });
    expect(buyButtons).toHaveLength(products.length);
  });

  it('adds product to cart when "Comprar" button is clicked', () => {
    const { getByText } = render(
      <CartProvider>
        <Card data={products} />
      </CartProvider>,
    );

    const buyButton = getByText('Comprar');
    if (buyButton.parentElement) {
      fireEvent.click(buyButton.parentElement);
    } else {
      throw new Error('Parent element of "Comprar" button not found');
    }
  });
});
