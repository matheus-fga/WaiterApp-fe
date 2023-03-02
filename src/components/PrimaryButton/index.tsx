import { ReactNode } from 'react';
import { Button } from './styles';

interface PrimaryButtonProps {
  children: ReactNode
  isDisabled?: boolean
}

export default function PrimaryButton({ children, isDisabled }: PrimaryButtonProps) {
  return (
    <Button disabled={isDisabled} >
      {children}
    </Button>
  );
}
