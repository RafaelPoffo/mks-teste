import { useCart } from '@/context/CartContext';
import { SidebarItem } from './SidebarItem/SidebarItem';
import {
  FinishButton,
  SidebarContainer,
  SidebarHeaderContainer,
  SidebarItemsContainer,
  TotalPriceContainer,
} from './styles';
import { toast } from 'sonner';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { getTotalPrice } = useCart();

  const totalPrice = getTotalPrice();

  const handleFinishPurchase = () => {
    toast.success('Compra finalizada!', {
      position: 'top-right',
    });
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeaderContainer>
        <span>
          <p>Carrinho de compras</p>
        </span>
        <button onClick={onClose}>X</button>
      </SidebarHeaderContainer>
      <SidebarItemsContainer>
        <SidebarItem />
      </SidebarItemsContainer>
      <TotalPriceContainer>
        <p>Total:</p>
        <p>{`R$${parseFloat(totalPrice as unknown as string).toLocaleString(
          'pt-BR',
        )}`}</p>
      </TotalPriceContainer>
      <FinishButton onClick={() => handleFinishPurchase()}>
        Finalizar Compra
      </FinishButton>
    </SidebarContainer>
  );
}
