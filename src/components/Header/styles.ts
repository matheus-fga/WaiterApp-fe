import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  background: #d73035;
  height: 198px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1216px;

  .page_details {
    h1 {
      font-size: 32px;
      font-weight: 600;
      color: white;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      color: white;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
