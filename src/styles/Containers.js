import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerHome = styled.main`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem 6rem;

  @media (max-width: 800px) {
    padding: 1.5rem;
  }
`;
