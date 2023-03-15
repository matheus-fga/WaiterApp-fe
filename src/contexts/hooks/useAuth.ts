import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { api } from '../../utils/api';

import { User } from '../../types/User';
import { Roles } from '../../types/Roles';
import { UserLoginParams } from '../../types/UserLoginParams';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      setAuthenticated(true);
      setLoggedUser(JSON.parse(user) as User);
    }

    setLoading(false);
  }, []);

  async function handleLogin(params: UserLoginParams) {
    const { email, password } = params;

    const { data: { user } }  = await api.post('/auth', { email, password });

    localStorage.setItem('user', JSON.stringify(user));
    setLoggedUser(user as User);
    setAuthenticated(true);

    const from = location.state?.from?.pathname
      || (user.role === Roles.ADMIN ? '/dashboard' : 'home');

    navigate(from, { replace: true });
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  }

  return { authenticated, loggedUser, loading, handleLogin, handleLogout };
}
