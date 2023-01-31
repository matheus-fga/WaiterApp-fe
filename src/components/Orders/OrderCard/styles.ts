import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    gap: 4px;
    background: white;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    height: 128px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }
  }
`;
