import { Overlay, ModalBody, OrderDetails, Actions } from './styles';

import closeIcon from '../../assets/images/close-icon.svg';

import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

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
    <Overlay>
      <ModalBody>
        <div className="modal-header">
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="icone para fechar o modal" />
          </button>
        </div>

        <div className="modal-status-container">
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
        </div>

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

        <Actions>
          {order.status !== 'DONE' && (
            <button
              type="button"
              className="primary-button"
              onClick={onChangeOrderStatus}
              disabled={isLoading}
            >
              <span>
                {order.status === 'WAITING' ? '👩‍🍳' : '✅'}
              </span>
              <strong>
                {order.status === 'WAITING' ? 'Iniciar Produção' : 'Concluir Pedido'}
              </strong>
            </button>
          )}

          <button
            type="button"
            className="secondary-button"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
