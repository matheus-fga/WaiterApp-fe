import { createContext } from 'react';

import useAuth from './hooks/useAuth';

import { User } from '../types/User';
import { UserLoginParams } from '../types/UserLoginParams';

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextType {
  authenticated: boolean
  loggedUser: User | null
  handleLogin: (params: UserLoginParams) => Promise<void>
  handleLogout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: AuthProviderProps) {
  const {
    authenticated, loggedUser, loading, handleLogin, handleLogout
  } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ authenticated, loggedUser, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
