import { useState } from 'react';

import { Container } from './styles';

import { OrderCard } from '../OrderCard';
import { OrderModal } from '../../OrderModal';

import { Order } from '../../../types/Order';
interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard ({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState <Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Container>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />

      <div className="orders-board-header">
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
        <span></span>
      </div>

      {orders.map((order) => (
        <OrderCard
          key={order._id}
          order={order}
          onOpenModal={handleOpenModal}
        />
      ))}

    </Container>
  );
}
