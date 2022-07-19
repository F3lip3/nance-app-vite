import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '~/app/routes';
import { globalStyles } from '~/global/styles/globalStyles';

export const App = () => {
  globalStyles();

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
