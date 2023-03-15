import useAuthContext from '../../hooks/useAuthContext';

import { Header } from '../../components/Header';
import { Orders } from '../../components/Orders';
import SecondaryButton from '../../components/SecondaryButton';
import logOffIcon from '../../assets/images/log-off-icon.svg';

import { Navbar } from './styles';

export default function Home() {
  const { handleLogout } = useAuthContext();

  return (
    <>
      <Header />
      <Navbar>
        <SecondaryButton onClick={handleLogout}>
          <img src={logOffIcon} alt="ícone de log off" />
          Sair
        </SecondaryButton>
      </Navbar>
      <Orders />
    </>
  );
}
