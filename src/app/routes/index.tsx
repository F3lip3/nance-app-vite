import { Route, Routes } from 'react-router-dom';
import { SignIn } from '~/app/modules/SignIn';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<></>} />
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
};
