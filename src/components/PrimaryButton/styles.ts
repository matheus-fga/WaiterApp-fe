import styled from 'styled-components';

export const Button = styled.button`
  width:100%;
  padding: 14px 28px;
  border: none;
  border-radius: 44px;
  background: #d73035;
  color: #ffffff;
  font-weight: 600;
  transition: background 0.15s ease-in;

  &:disabled {
    cursor: default;
    background: #cccccc;
  }

  &:hover {
    background: #ffabad;
  }

  &:active {
    background: #8a1114;
  }
`;
