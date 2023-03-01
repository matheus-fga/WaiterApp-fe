import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';

import Routes from './Routes';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  );
}
