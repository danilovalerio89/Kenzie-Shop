import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  max-width: 100%;
  section {
    max-width: 90%;
    @media (min-width: 650px) {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
