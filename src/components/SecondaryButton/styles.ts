import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 0;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 0;
  color: #d73035;
  white-space: nowrap;

  img {
    filter: invert(29%) sepia(38%) saturate(4069%) hue-rotate(338deg) brightness(86%) contrast(96%);
  }

  &:hover {
    color: #ffabad;

    img {
      filter: invert(72%) sepia(97%) saturate(1748%) hue-rotate(306deg) brightness(125%) contrast(115%);
    }
  }

  &:disabled {
    color: #cccccc !important;
    cursor: default !important;
  }

  &:active {
    color: #8a1114;

    img {
      filter: invert(11%) sepia(75%) saturate(5264%) hue-rotate(351deg) brightness(71%) contrast(95%);
    }
  }
`;
