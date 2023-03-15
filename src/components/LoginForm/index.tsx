import { useState } from 'react';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import useAuthContext from '../../hooks/useAuthContext';

import FormGroup from '../FormGroup';
import { Input } from '../Input';
import InputWithAction from '../InputWithAction';
import PrimaryButton from '../PrimaryButton';

import isEmailValid from '../../utils/isEmailValid';

import eyeIcon from '../../assets/images/eye-icon.svg';
import eyeHiddenIcon from '../../assets/images/eye-hidden-icon.svg';

import { requestError } from '../../types/requestError';

import { Form, ButtonContainer } from './styles';

export default function LoginForm() {
  const [passwordInputType, setPasswordInputType] = useState('password');
  const currentEyeIcon = passwordInputType === 'password' ? eyeIcon : eyeHiddenIcon;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { handleLogin } = useAuthContext();

  const isFormValid = ((email && isEmailValid(email)) && password);

  function handlePasswordHiddenToggle() {
    const type = passwordInputType === 'password' ? 'text' : 'password';
    setPasswordInputType(type);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (!event.target.value || isEmailValid(event.target.value)) {
      setEmailError('');
    }
  }

  function handleEmailBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (event.target.value && !isEmailValid(email)) {
      setEmailError('Endereço de e-mail inválido');
    }
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    setPasswordError('');
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await handleLogin({ email, password });

    } catch (error) {
      const axiosError = error as AxiosError;

      if(axiosError.response?.status === 400) {
        const { error } = axiosError.response.data as requestError;

        if (error.includes('Usuário')) {
          setEmailError('E-mail não cadastrado. Informe ao administrador');
        } else if (error.includes('Senha')) {
          setPasswordError('Senha incorreta. Tente novamente');
        }

      } else {
        toast.error('Ocorreu um erro no servidor. Tente novamente mais tarde!');
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit} >
      <FormGroup
        label="E-mail"
        error={emailError}
      >
        <Input
          value={email}
          type="email"
          placeholder="Seu e-mail de acesso"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailError}
        />
      </FormGroup>
      <FormGroup
        label="Senha"
        error={passwordError}
      >
        <InputWithAction
          onClick={handlePasswordHiddenToggle}
          actionIconPath={currentEyeIcon}
          actionEnableCondition={!!password}
        >
          <Input
            value={password}
            type={passwordInputType}
            placeholder="Informe sua senha"
            onChange={handlePasswordChange}
            error={passwordError}
          />
        </InputWithAction>
      </FormGroup>

      <ButtonContainer>
        <PrimaryButton isDisabled={!isFormValid} >
          Fazer Login
        </PrimaryButton>
      </ButtonContainer>
    </Form>
  );
}
