import styled from 'styled-components';

export const OrderStatus = styled.div`
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
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  & > strong {
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
