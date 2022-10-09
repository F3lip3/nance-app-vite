import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '~/app/shared/hooks/useAuth';

type PrivateRouteProps = {
  redirectPath?: string;
  children?: JSX.Element;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  redirectPath = '/signin',
  children
}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
