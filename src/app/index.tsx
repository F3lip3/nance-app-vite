import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '~/app/routes';
import { AuthProvider } from '~/app/shared/hooks/useAuth';
import { ToastProvider } from '~/app/shared/hooks/useToast';
import { queryClient } from '~/global/config/queryClient';
import { globalStyles } from '~/global/styles/globalStyles';

export const App = () => {
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
};
