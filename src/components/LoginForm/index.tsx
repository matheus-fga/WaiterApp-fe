import { useState } from 'react';

import FormGroup from '../FormGroup';
import { Input } from '../Input';
import InputWithAction from '../InputWithAction';

import eyeIcon from '../../assets/images/eye-icon.svg';
import eyeHiddenIcon from '../../assets/images/eye-hidden-icon.svg';

import { Form } from './styles';

export default function LoginForm() {
  const [passwordInputType, setPasswordInputType] = useState('password');
  const currentEyeIcon = passwordInputType === 'password' ? eyeIcon : eyeHiddenIcon;

  function handleHiddenToggle() {
    const type = passwordInputType === 'password' ? 'text' : 'password';
    setPasswordInputType(type);
  }

  return (
    <Form>
      <FormGroup
        label="E-mail"
        error={undefined}
      >
        <Input
          type="email"
          placeholder="Seu e-mail de acesso"
          error={undefined}
        />
      </FormGroup>
      <FormGroup
        label="Senha"
        error={undefined}
      >
        <InputWithAction
          onClick={handleHiddenToggle}
          ActionIconPath={currentEyeIcon}
        >
          <Input
            type={passwordInputType}
            placeholder="Informe sua senha"
            error={undefined}
          />
        </InputWithAction>
      </FormGroup>
    </Form>
  );
}
