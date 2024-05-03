import Image from 'next/image';
import BuyIcon from '/public/icons/buy.svg';

import {
  CardContainer,
  CardFooter,
  ImageContainer,
  ProductLegend,
  ProductName,
  ProductsInfo,
  ProductsInfoContainer,
  ProductsPrice,
  GridContainer,
  Container,
} from './styles';
import { toast } from 'sonner';
import { SkeletonLoader } from '../Loading/CardSkeleton/CardSkeleton';
import { Product, useCart } from '@/context/CartContext';

type CardProps = {
  data: Product[];
};

export function Card({ data }: CardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    try {
      addToCart(product);
      toast.success('Produto adicionado no carrinho!', {
        position: 'top-right',
      });
    } catch (err) {
      toast.error('O produto não adicionado, tente novamente'),
        {
          position: 'top-right',
        };
      console.log(err);
    }
  };

  return (
    <Container>
      <GridContainer>
        {data ? (
          data.map((product) => (
            <CardContainer key={product.id}>
              <ImageContainer>
                <Image
                  src={product.photo}
                  alt={product.name}
                  width={150}
                  height={138}
                />
              </ImageContainer>
              <ProductsInfoContainer>
                <ProductsInfo>
                  <ProductName>
                    <p>{product.name}</p>
                  </ProductName>
                  <ProductsPrice>
                    <p>{`R$${parseFloat(product.price).toLocaleString(
                      'pt-BR',
                    )}`}</p>
                  </ProductsPrice>
                </ProductsInfo>
                <ProductLegend>
                  <p>Redesigned from scratch and completely revised.</p>
                </ProductLegend>
              </ProductsInfoContainer>
              <CardFooter onClick={() => handleAddToCart(product)}>
                <Image src={BuyIcon} alt="Seta" width={12} height={13.5} />
                <p>Comprar</p>
              </CardFooter>
            </CardContainer>
          ))
        ) : (
          <>
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        )}
      </GridContainer>
    </Container>
  );
}
