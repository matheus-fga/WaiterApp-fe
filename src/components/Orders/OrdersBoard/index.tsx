import { useState } from 'react';
import { toast } from 'react-toastify';

import { Container } from './styles';

import { api } from '../../../utils/api';

import { OrderCard } from '../OrderCard';
import { OrderModal } from '../../OrderModal';

import { Order } from '../../../types/Order';
interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
  onCancelOrder: (orderId: string) => void;
}

export function OrdersBoard ({ icon, title, orders, onChangeOrderStatus, onCancelOrder }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState <Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, {
      status
    });

    toast.success(`O pedido da mesa ${selectedOrder?.table}
      ${status === 'IN_PRODUCTION' ? ' foi iniciado' : 'está pronto'}`
    );
    setIsLoading(false);
    onChangeOrderStatus(selectedOrder!._id, status);
    handleCloseModal();
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 1000);
    });
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado`);
    setIsLoading(false);
    onCancelOrder(selectedOrder!._id);
    handleCloseModal();
  }

  return (
    <Container>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
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
