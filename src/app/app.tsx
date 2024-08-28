import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { RecoilRoot } from 'recoil';
import { ToastProvider } from '~/shared/ui/toast-provider';
import { routeTree } from './routes.generated';
import './styles.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 3, // 3분
    },
  },
});

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

export const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};
