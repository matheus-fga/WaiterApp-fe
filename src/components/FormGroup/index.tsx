import { ReactNode } from 'react';

import info from '../../assets/images/info-icon.svg';

import { Container } from './styles';

interface FormGroupProps {
  children: ReactNode
  label: string
  error?: string
}

export default function FormGroup({ children, label, error }: FormGroupProps) {
  return (
    <Container>
      <label>{label}</label>

      {children}

      {error && (
        <div className="error-info">
          <img src={info} alt="ícone de informação" />
          <small>{error}</small>
        </div>
      )}
    </Container>
  );
}
