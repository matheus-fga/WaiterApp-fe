import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';

import Home from './pages/Home';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <ToastContainer position="bottom-center" />
    </>
  );
}
