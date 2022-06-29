import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  background-color: var(--white);
  margin: 20px;
  border-radius: 5px;
  figure {
    max-width: 100%;
    padding: 15px 0;
    img {
      max-width: 100%;
    }
  }
  h4 {
    height: 46px;
  }

  p {
    height: 36px;
  }
  h3 {
    height: 27px;
  }
  p,
  h3,
  h4 {
    padding: 3px 15px;
  }
  button {
    width: 90%;
    margin: 10px 5%;
    background-color: var(--blue-light);
    border: 1px solid var(--blue-light);
    border-radius: 3px;
    color: var(--white);
    padding: 10px;
    transition: 0.2s;
    &:hover {
      background-color: var(--blue-dark);
    }
    &:active {
      transform: translateY(2px);
    }
  }
  @media (max-width: 310px) {
    h4 {
      height: 60px;
    }
  }
  @media (max-width: 240px) {
    h4 {
      height: 80px;
    }
  }
`;
export const ContainerCart = styled.div`
  max-width: 300px;
  background-color: var(--white);
  margin: 20px;
  border-radius: 5px;
  figure {
    max-width: 100%;
    padding: 15px 0;
    img {
      max-width: 100%;
    }
  }
  h4 {
    height: 46px;
  }

  p {
    height: 36px;
  }
  h3 {
    height: 27px;
  }
  p,
  h3,
  h4 {
    padding: 3px 15px;
  }
  button {
    width: 90%;
    margin: 10px 5%;
    background-color: var(--blue-light);
    border: 1px solid var(--blue-light);
    border-radius: 3px;
    color: var(--white);
    padding: 10px;
    transition: 0.2s;
    &:hover {
      background-color: var(--blue-dark);
    }
    &:active {
      transform: translateY(2px);
    }
  }
  @media (max-width: 310px) {
    h4 {
      height: 60px;
    }
  }
  @media (max-width: 240px) {
    h4 {
      height: 80px;
    }
  }
`;
