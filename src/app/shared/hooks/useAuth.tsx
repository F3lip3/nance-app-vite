import { useMutation } from '@tanstack/react-query';
import React, { createContext, useCallback, useContext } from 'react';
import { mapError } from '~/app/shared/helpers/errors';
import { useSessionStorage } from '~/app/shared/hooks/useSessionStorage';
import { useToast } from '~/app/shared/hooks/useToast';
import { Session, SignInProps, User } from '~/app/shared/interfaces/User';
import api from '~/app/shared/services/api';

interface AuthProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: User;
  signIn: (signInProps: SignInProps) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const { addToast } = useToast();
  const [session, setSession] = useSessionStorage<Session>(
    'nance_session',
    {} as Session
  );

  const singInRequest = useMutation(async (signInProps: SignInProps) => {
    try {
      const response = await api.post<Session>('auth/login', signInProps);

      setSession(response.data);
    } catch (error: any) {
      addToast({ ...mapError(error) });
    }
  });

  const signIn = useCallback(async (signInProps: SignInProps) => {
    await singInRequest.mutateAsync(signInProps);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: session.user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { useAuth, AuthProvider };
