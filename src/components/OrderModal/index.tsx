import { OrderStatus, OrderDetails } from './styles';

import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import ModalBody from '../ModalBody';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onChangeOrderStatus: () => Promise<void>;
  onCancelOrder: () => Promise<void>;
  isLoading: boolean
}

export function OrderModal({
  visible,
  order,
  onClose,
  onChangeOrderStatus,
  onCancelOrder,
  isLoading,
}: OrderModalProps) {
  if (!visible || !order) return null;

  const totalPrice = order.products.reduce((total, { product, quantity }) => (
    total + (product.price * quantity)
  ), 0);

  return (
    <ModalBody
      title={`Mesa ${order.table}`}
      onclose={onClose}
      primaryAction={
        order.status !== 'DONE'
          ? {
            label: `${order.status === 'WAITING' ? 'Iniciar Produção' : 'Concluir Pedido'}`,
            onClick: onChangeOrderStatus,
            disableCondition: isLoading
          }
          : undefined
      }
      secondaryAction={{
        label: 'Cancelar Pedido',
        onClick: onCancelOrder,
        disableCondition: isLoading
      }}
    >

      <OrderStatus>
        <small>Status do Pedido</small>
        <div className="current-status">
          <span>
            {order.status === 'WAITING' && '🕑'}
            {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
            {order.status === 'DONE' && '✅'}
          </span>

          <strong>
            {order.status === 'WAITING' && 'Fila de espera'}
            {order.status === 'IN_PRODUCTION' && 'Em produção'}
            {order.status === 'DONE' && 'Pronto'}
          </strong>
        </div>
      </OrderStatus>

      <OrderDetails>
        <strong>Itens</strong>

        <div className="order-items">
          {order.products.map(({ _id, product, quantity }) => (
            <div key={_id} className="item">
              <img
                src={`http://localhost:3001/uploads/${product.imagePath}`}
                alt={`icone do item: ${product.name}`}
                width="86"
                height="44"
              />

              <span className="quantity">{quantity}x</span>

              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <span>Total</span>
          <strong>{formatCurrency(totalPrice)}</strong>
        </div>
      </OrderDetails>

    </ModalBody>
  );
}
