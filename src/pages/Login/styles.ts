import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1216px;
  height: 100vh;
  margin: 0 auto;
  padding: 8px;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    font-weight: 500;
    font-size: 16px;
    opacity: 0.9;
  }

  .waiter-app {
    margin-top: 4px;

    h1 {
      display: inline;
      font-size: 32px;
      line-height: 120%
    }

    span {
      font-size: 32px;
      opacity: 0.9;
    }
  }
`;
