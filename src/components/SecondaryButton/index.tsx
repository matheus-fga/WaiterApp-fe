import { Button } from './styles';

interface SecondaryButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export default function SecondaryButton({ children, onClick }: SecondaryButtonProps) {
  return(
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}
