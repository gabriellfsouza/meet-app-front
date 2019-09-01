import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.3);
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;

    svg {
      margin-bottom: 20px;
    }

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      max-height: 100%;
      border-radius: 4px;

      object-fit: cover;
      overflow: hidden;
      /* border: 3px solid rgba(255, 255, 255, 0.3); */
      /* background: rgba(0, 0, 0, 0.3); */
    }

    input {
      display: none;
    }
  }
`;
