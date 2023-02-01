import { Container } from './styles';

import { Order } from '../../../types/Order';
interface OrderCardProps {
  order: Order;
  onOpenModal: (order: Order) => void;
}

export function OrderCard({ order, onOpenModal }: OrderCardProps) {
  return (
    <Container>
      <button type='button' onClick={() => onOpenModal(order)}>
        <strong>Mesa {order.table}</strong>
        <span>{order.products.length} itens</span>
      </button>
    </Container>
  );
}
