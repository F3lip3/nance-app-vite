import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '~/app/modules/Dashboard';
import { SignIn } from '~/app/modules/SignIn';
import { PrivateRoute } from '~/app/routes/private';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<p>There&apos;s nothing here: 404!</p>} />
      <Route path="signin" element={<SignIn />} />
      <Route element={<PrivateRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
