import { Container } from './styles';

import { OrdersBoard } from './OrdersBoard';

import mockedOrders from '../../mocks/orders';

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={mockedOrders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
