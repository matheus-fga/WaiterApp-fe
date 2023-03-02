import { ReactNode } from 'react';

import { Container } from './styles';

interface InputWithActionProps {
  children: ReactNode
  onClick: () => void
  ActionIconPath: string
}


export default function InputWithAction({ children, onClick, ActionIconPath }: InputWithActionProps) {
  return (
    <Container>
      {children}
      <div className="action-button-container">
        <button type="button" onClick={onClick}>
          <img src={ActionIconPath} alt="ícone de toogle" />
        </button>
      </div>
    </Container>
  );
}
