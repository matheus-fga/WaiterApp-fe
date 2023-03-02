import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    padding: 0 48px 0 16px;
  }

  .action-button-container{
    position: absolute;
    top: calc(50% - 12px);
    right: 16px;

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }
`;
