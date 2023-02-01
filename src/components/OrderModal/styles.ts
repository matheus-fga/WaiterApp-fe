import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  width: 480px;
  padding: 32px;
  border-radius: 8px;
  background: white;

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-weight: 600;
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .modal-status-container {
    margin-top: 32px;

    small {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }

    .current-status {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;
      align-items: center;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        align-self: flex-start;
        display: block;
        min-width: 20px;
        margin-left: 12px;
        font-size: 14px;
        color: #666666;
      }

      .product-details {
        display: flex;
        flex-direction: column;
        margin-left: 4px;

        strong {
          margin-bottom: 4px;
          font-weight: 600;
        }

        span {
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;

  .primary-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #333;
    border: 0;
    border-radius: 48px;
    color: white;
    padding: 12px 24px;
  }

  .secondary-button {
    background: transparent;
    border: 0;
    font-weight: bold;
    padding: 12px 24px;
    color: #d73035;
  }
`;
