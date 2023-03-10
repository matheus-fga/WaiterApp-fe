import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

export default function useAuthContext() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuthContext has to be used within <AuthContext.Provider>');
  }

  return authContext;
}
