'use client';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ReactQueryProviders } from '../providers/react-query';
import { CartProvider } from '../context/CartContext';
import { Header } from '../components/Header/Header';
import { Toaster } from 'sonner';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProviders>
        <CartProvider>
          <body className={montserrat.className}>
            <div
              style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Header />
              <Toaster richColors />
              {children}
              <div
                style={{
                  width: '100%',
                  background: '#eeeeee',
                  display: 'flex',
                  height: '34px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p>MKS sistemas © Todos os direitos reservados</p>
              </div>
            </div>
          </body>
        </CartProvider>
      </ReactQueryProviders>
    </html>
  );
}
