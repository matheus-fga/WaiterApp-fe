import styled, { css } from 'styled-components';

interface InputProps {
  error?: string
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 54px;
  padding: 0 16px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 14px;
  background: transparent;
  caret-color: #d73035;
  color: #666666;
  outline: none;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    border-color: #666666;
  }

  ${({ error }) => error && css`
    color: #d73035;
    border-color: #d73035 !important;
  `}
`;
