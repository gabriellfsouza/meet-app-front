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

    button.edit {
      background: #4dbaf9;

      &:hover {
        background: ${darken(0.05, '#4dbaf9')};
      }

      &:active {
        background: ${darken(0.5, '#4dbaf9')};
      }
    }

    h1 {
      color: #fff;
    }

    span {
      display: flex;

      button {
        margin-left: 10px;
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin: 20px 0;
    border-radius: 4px;
    width: 100%;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
  }

  p {
    flex: 1;
    margin-bottom: 30px;
    color: #fff;
    font-size: 17px;
    line-height: 30px;
  }

  footer {
    display: flex;
    flex-direction: row;
    span {
      margin-right: 30px;
      display: flex;
      align-items: center;
      color: ${darken(0.4, '#fff')};
      font-size: 15px;

      svg {
        margin-right: 5px;
      }
    }
  }
`;
