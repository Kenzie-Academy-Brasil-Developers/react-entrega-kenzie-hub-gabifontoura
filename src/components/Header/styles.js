import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--color-grey-4);
  display: flex;
  text-align: center;
  z-index: 1;
  justify-content: space-between;
  height: max-content;
  margin-bottom: 1rem;
  gap:2rem;

  @media (max-width: 800px) {

    align-self: center;
    width: max-content;

  }


`;
