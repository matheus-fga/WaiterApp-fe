import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 32px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #333333;
  }

  .error-info {
    display: flex;
    align-items: center;
    margin-top: 8px;

    small {
      margin-left: 8px;
      font-size: 14px;
      color: #d73035;
    }
  }
`;
