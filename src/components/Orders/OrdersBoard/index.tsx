import { Container } from './styles';

import { OrderCard } from '../OrderCard';

import { Order } from '../../../types/Order';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard ({ icon, title, orders }: OrdersBoardProps) {
  return (
    <Container>
      <div className="orders_board_header">
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
        <span></span>
      </div>

      {orders.map((order) => (
        <OrderCard key={order._id} order={order}/>
      ))}

    </Container>
  );
}
