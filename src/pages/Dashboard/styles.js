import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
    }

    /* button {
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
    }*/
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: stretch;
  }
`;

export const Resume = styled.li`
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
  background: rgba(24, 22, 31, 0.3);

  strong {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }

  span {
    display: flex;
    color: ${darken(0.5, '#fff')};
    font-size: 16px;

    a {
      margin-left: 30px;
      border: 0;
      background: none;
      color: #fff;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.05, '#fa4d69')};
      }

      &:active {
        color: ${darken(0.5, '#fa4d69')};
      }
    }
  }
`;
