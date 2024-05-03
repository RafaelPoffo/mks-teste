'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {},
    },
  });
}

let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    return queryClient;
  } else {
    if (!browserQueryClient) browserQueryClient = queryClient;
    return browserQueryClient;
  }
}

export function ReactQueryProviders({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
