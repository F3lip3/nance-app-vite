import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '~/app/routes';
import { queryClient } from '~/global/config/queryClient';
import { globalStyles } from '~/global/styles/globalStyles';

export const App = () => {
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
