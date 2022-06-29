import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--grey);
  height: 65px;
  padding: 0 20px;
  div {
    width: 20%;
    display: flex;
    justify-content: space-around;
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
  @media (max-width: 420px) {
    flex-direction: column;
    justify-content: center;
    height: 75px;
    div {
      padding: 3px 0;
      width: 100%;
      justify-content: flex-end;
    }
  }
`;
