import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { Dashboard } from '@/components/Dashboard/Dashboard';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

describe('Dashboard', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  afterEach(() => {
    queryClient.clear();
  });

  it('should render Dashboard component', async () => {
    const mockData = {
      data: [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ],
      count: 2,
    };

    (useQuery as jest.Mock).mockReturnValueOnce({ data: mockData });

    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>,
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});
