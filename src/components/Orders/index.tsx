import { useEffect, useState } from 'react';
import sockerIo from 'socket.io-client';

import { Container } from './styles';

import { api } from '../../utils/api';

import { OrdersBoard } from './OrdersBoard';

import { Order } from '../../types/Order';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = sockerIo('http://192.168.0.28:3001', {
      transports: ['websocket'],
    });

    socket.on('orders@new', (order: Order) => {
      setOrders((prevState) => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get('/orders')
      .then(response => {
        setOrders(response.data);
      });
  }, []);

  const waitingOrders = orders.filter((order) => (
    order.status === 'WAITING'
  ));

  const inProductionOrders = orders.filter((order) => (
    order.status === 'IN_PRODUCTION'
  ));

  const doneOrders = orders.filter((order) => (
    order.status === 'DONE'
  ));

  function handleChangeOrderStatus(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId
        ? { ...order, status }
        : order
    )));
  }

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => (
      order._id !== orderId
    )));
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={waitingOrders}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={inProductionOrders}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={doneOrders}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrder}
      />
    </Container>
  );
}
