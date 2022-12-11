import styled from "styled-components";

export const StyledHomePage = styled.main`
  background-color: var(--color-grey-4);
  display: flex;
  flex-direction: column;
  border: none;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  .lines {
    padding: 3rem 0;
    border-top: 1px solid var(--color-grey-1);
    border-bottom: 1px solid var(--color-grey-1);
    position: absolute;
    top: 6rem;
    width: 100%;
  }

  .intro {
    padding: 3rem 0;
    margin-bottom: 1rem;

  }

  .btn-plus{
    height: 2.25rem;
    padding: 0.75rem;
  }


`;
