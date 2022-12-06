import styled from "styled-components";

export const StyledHomePage = styled.main`
  background-color: var(--color-grey-4);
  display: flex;
  flex-direction: column;
  border: none;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 2rem 6rem;

  @media (max-width: 800px) {
    padding: 2rem;
  }
`;
