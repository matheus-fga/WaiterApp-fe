import LoginForm from '../../components/LoginForm';
import { Container, Welcome } from './styles';

export default function Login() {
  return (
    <Container>
      <Welcome>
        <h3>Bem-vindo(a) ao</h3>
        <div className="waiter-app">
          <h1>WAITER</h1><span>APP</span>
        </div>
      </Welcome>

      <LoginForm />
    </Container>
  );
}
