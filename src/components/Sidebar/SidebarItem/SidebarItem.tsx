import { Product, useCart } from '@/context/CartContext';
import {
  CloseButton,
  ProductLabel,
  ProductName,
  ProductPrice,
  ProductQuantity,
  Separator,
  SidebarItemContainer,
} from './styles';
import Image from 'next/image';
import { toast } from 'sonner';

export function SidebarItem() {
  const { cart, addToCart, removeFromCart, removeProductQuantity } = useCart();

  console.log(cart);

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

  const handleRemoveQuantity = (product: Product) => {
    try {
      removeProductQuantity(product.id);
      toast.success('Produto removido do carrinho!', {
        position: 'top-right',
      });
    } catch (err) {
      toast.error('O produto não foi removido, tente novamente'),
        {
          position: 'top-right',
        };
      console.log(err);
    }
  };
  const handleRemoveFromCart = (product: Product) => {
    try {
      removeFromCart(product.id);
      toast.success('Produto retirado do carrinho!', {
        position: 'top-right',
      });
    } catch (err) {
      toast.error('O produto não foi removido, tente novamente'),
        {
          position: 'top-right',
        };
      console.log(err);
    }
  };

  return (
    <>
      {cart &&
        cart.map((product) => (
          <SidebarItemContainer key={product.id}>
            <Image
              src={product.photo}
              alt={product.name}
              width={50}
              height={50}
            />
            <ProductName>
              <p>{product.name}</p>
            </ProductName>
            <ProductLabel>
              <p>Qtd:</p>
              <ProductQuantity>
                <button onClick={() => handleRemoveQuantity(product)}>-</button>
                <Separator />
                <p>{product.qtd}</p>
                <Separator />
                <button onClick={() => handleAddToCart(product)}>+</button>
              </ProductQuantity>
            </ProductLabel>
            <ProductPrice>
              <p>{`R$${parseFloat(
                product.totalPrice as unknown as string,
              ).toLocaleString('pt-BR')}`}</p>
            </ProductPrice>
            <CloseButton onClick={() => handleRemoveFromCart(product)}>
              X
            </CloseButton>
          </SidebarItemContainer>
        ))}
    </>
  );
}
