import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 100px;
  right: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--blue-dark);
  color: var(--white);
  header {
    display: flex;
    align-items: center;
    height: 30px;
    cursor: pointer;
  }
  div {
    height: 40px;
  }
  button {
    background-color: var(--blue-light);
    border: 1px solid var(--blue-light);
    border-radius: 3px;
    color: var(--white);
    padding: 4px;
  }
`;
