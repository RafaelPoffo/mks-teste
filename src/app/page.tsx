import { Dashboard } from '@/components/Dashboard/Dashboard';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'MKS Sistemas | Produtos',
  };
}

export default function Home() {
  return <Dashboard />;
}
