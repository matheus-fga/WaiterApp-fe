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

export const BodyContainer = styled.div`
  min-width: 480px;
  padding: 32px;
  border-radius: 8px;
  background: white;

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

    .title-group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }

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
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;

  .secondary-button-container {
    flex: 1;
  }

  .primary-button-container {
    max-width: 240px;
    flex: 2;
  }
`;
