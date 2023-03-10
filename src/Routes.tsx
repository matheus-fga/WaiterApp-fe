import { Routes as Router, Route, Outlet, Navigate } from 'react-router-dom';

import useAuthContext from './hooks/useAuthContext';
import { history } from './utils/history';
import { toast } from 'react-toastify';

import Home from './pages/Home';
import Login from './pages/Login';

import { Roles } from './types/Roles';

interface RequireAuthProps {
  roles: Roles[]
}

const  RequireAuth = ({ roles }: RequireAuthProps) => {
  const { authenticated, loggedUser } = useAuthContext();

  if (!authenticated) {
    return <Navigate to="/login" replace state={{ from: history.location}} />;
  }

  if (loggedUser?.role && !roles.includes(loggedUser.role)) {
    toast.error('Acesso não autorizado!');
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route element={<RequireAuth roles={[Roles.ADMIN, Roles.WAITER]} />}>
        <Route path="/home" element={<Home />} />
      </Route>

      {/* Rotas de ADMIN */}
      <Route element={<RequireAuth roles={[Roles.ADMIN]} />}>
        <Route path="/dashboard" element={<h1>DASHBOARD</h1>} />
      </Route>
    </Router>
  );
}

