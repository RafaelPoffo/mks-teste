'use client';
import { useQuery } from '@tanstack/react-query';
import { Card } from '../Card/Card';

export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  qtd?: number;
};

export function Dashboard() {
  const { data } = useQuery({
    queryKey: ['get-products'],
    queryFn: async () => {
      const response = await fetch(
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC',
      );
      const productsData = await response.json();
      console.log(productsData);
      return { data: productsData.products, count: productsData.count };
    },
    refetchOnWindowFocus: false,
  });

  return <Card data={data?.data} />;
}
