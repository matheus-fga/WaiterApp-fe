import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  .orders_board_header {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px;
    font-size: 14px;
  }
`;

