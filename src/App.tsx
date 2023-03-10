import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './contexts/AuthContext';

import { GlobalStyles } from './styles/GlobalStyles';

import Routes from './Routes';
import { history } from './utils/history';

export function App() {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
      <ToastContainer position="bottom-center" />
    </AuthProvider>
  );
}
