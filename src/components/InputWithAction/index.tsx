import { ReactNode } from 'react';

import { Container } from './styles';

interface InputWithActionProps {
  children: ReactNode
  onClick: () => void
  actionIconPath: string
  actionEnableCondition: boolean
}


export default function InputWithAction({
  children, onClick, actionIconPath, actionEnableCondition }: InputWithActionProps
){
  return (
    <Container>
      {children}

      {actionEnableCondition && (
        <div className="action-button-container">
          <button type="button" onClick={onClick}>
            <img src={actionIconPath} alt="ícone clicável" />
          </button>
        </div>
      )}
    </Container>
  );
}
