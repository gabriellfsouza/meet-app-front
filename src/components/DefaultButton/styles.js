import styled from 'styled-components';
import { darken } from 'polished';

export const DefaultButton = styled.button`
  display: flex;
  align-self: flex-end;
  margin: 5px 0 0;
  padding: 7px 12px;
  background: #fa4d69;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.05, '#fa4d69')};
  }

  &:active {
    background: ${darken(0.5, '#fa4d69')};
  }
`;
