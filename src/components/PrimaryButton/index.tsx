import { ReactNode } from 'react';
import { Button } from './styles';

interface PrimaryButtonProps {
  children: ReactNode
  onClick?: () => void
  isDisabled?: boolean
}

export default function PrimaryButton({ children, onClick, isDisabled }: PrimaryButtonProps) {
  return (
    <Button onClick={onClick} disabled={isDisabled} >
      {children}
    </Button>
  );
}
