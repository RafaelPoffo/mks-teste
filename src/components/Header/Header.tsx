import Image from 'next/image';
import { HeaderButton, HeaderContainer, HeaderContent } from './styles';
import CartIcon from '/public/icons/cart.svg';
import { Sidebar } from '../Sidebar/Sidebar';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
export function Header() {
  const { getTotalProducts } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const totalProducts = getTotalProducts();

  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <p>
            MKS <span>Sistemas</span>
          </p>
          <HeaderButton onClick={() => setIsSidebarOpen(true)}>
            <div>
              <Image src={CartIcon} alt="Seta" width={19} height={18} />
              <p>{totalProducts}</p>
            </div>
          </HeaderButton>
        </HeaderContent>
      </HeaderContainer>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}
