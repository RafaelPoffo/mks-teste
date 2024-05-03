'use client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React, { createContext, useContext, useState } from 'react';

export interface Product {
  photo: string | StaticImport;
  id: number;
  name: string;
  price: string;
  qtd: number;
  totalPrice: number;
}

interface CartContextData {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  removeProductQuantity: (productId: number) => void;
  getTotalProducts: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((p) =>
          p.id === existingProduct.id
            ? {
                ...p,
                qtd: p.qtd + 1,
                totalPrice: (p.qtd + 1) * parseFloat(p.price),
              }
            : p,
        ),
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, qtd: 1, totalPrice: parseFloat(product.price) },
      ]);
    }
  };

  const removeProductQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === productId
            ? {
                ...p,
                qtd: p.qtd > 1 ? p.qtd - 1 : 0,
                totalPrice: (p.qtd > 1 ? p.qtd - 1 : 0) * parseFloat(p.price),
              }
            : p,
        )
        .filter((p) => p.qtd > 0),
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId),
    );
  };

  const getTotalProducts = () => {
    return cart.reduce((total, product) => total + product.qtd, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + parseFloat(product.price) * product.qtd,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeProductQuantity,
        getTotalProducts,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
