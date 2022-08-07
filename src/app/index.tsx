import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '~/app/routes';
import { ToastProvider } from '~/app/shared/hooks/useToast';
import { queryClient } from '~/global/config/queryClient';
import { globalStyles } from '~/global/styles/globalStyles';

export const App = () => {
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ToastProvider>
    </QueryClientProvider>
  );
};
