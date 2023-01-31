import { Container } from './styles';

import { Order } from '../../../types/Order';

interface OrderCardProps {
  order: Order;
}

export function OrderCard({ order }: OrderCardProps) {
  return (
    <Container>
      <button type='button'>
        <strong>Mesa {order.table}</strong>
        <span>{order.products.length} itens</span>
      </button>
    </Container>
  );
}
