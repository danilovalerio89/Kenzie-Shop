import styled from "styled-components";

export const HeaderStyled = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--grey);
  height: 90px;
  padding: 0 20px;
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
    button {
      font-weight: 600;
      min-width: 70px;
      margin: 0 5px;
    }
  }
  h1 {
    cursor: pointer;
  }
  button {
    background-color: var(--blue-light);
    border: 1px solid var(--blue-light);
    padding: 3px;
    color: var(--white);
    border-radius: 3px;
    &:hover {
      background-color: var(--blue-dark);
      border: 1px solid var(--blue-dark);
    }
  }
  @media (min-width: 820px) {
    flex-direction: row;
    h1 {
      min-width: 50%;
    }
    div {
      button {
        min-width: 100px;
      }
    }
  }
`;
