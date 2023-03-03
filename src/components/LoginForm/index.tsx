import { useState } from 'react';

import FormGroup from '../FormGroup';
import { Input } from '../Input';
import InputWithAction from '../InputWithAction';
import PrimaryButton from '../PrimaryButton';

import isEmailValid from '../../utils/isEmailValid';

import eyeIcon from '../../assets/images/eye-icon.svg';
import eyeHiddenIcon from '../../assets/images/eye-hidden-icon.svg';

import { Form, ButtonContainer } from './styles';

export default function LoginForm() {
  const [passwordInputType, setPasswordInputType] = useState('password');
  const currentEyeIcon = passwordInputType === 'password' ? eyeIcon : eyeHiddenIcon;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const isFormValid = ((email && isEmailValid(email)) && password);

  function handlePasswordHiddenToggle() {
    const type = passwordInputType === 'password' ? 'text' : 'password';
    setPasswordInputType(type);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (isEmailValid(email)) {
      setEmailError('');
    }
  }

  function handleEmailBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (event.target.value && !isEmailValid(email)) {
      setEmailError('Endereço de e-mail inválido');
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert('Fazendo Login...');
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
        error={undefined}
      >
        <InputWithAction
          onClick={handlePasswordHiddenToggle}
          ActionIconPath={currentEyeIcon}
        >
          <Input
            value={password}
            type={passwordInputType}
            placeholder="Informe sua senha"
            onChange={handlePasswordChange}
            error={undefined}
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
