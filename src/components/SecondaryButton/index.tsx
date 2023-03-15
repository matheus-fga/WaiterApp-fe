import { Button } from './styles';

interface SecondaryButtonProps {
  children: React.ReactNode
  onClick: () => void
  isDisable?: boolean
}

export default function SecondaryButton({ children, onClick, isDisable }: SecondaryButtonProps) {
  return(
    <Button onClick={onClick} disabled={isDisable}>
      {children}
    </Button>
  );
}
