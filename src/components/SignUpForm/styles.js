import styled from "styled-components"; 




export const StyledForm = styled.form`

    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
    overflow-x: hidden;


    @media (max-width: 800px) {
       width: 20rem;
     

   }


`



export const StyledSelect = styled.select`
  outline: none;
  border: none;
  border-radius: var(--radius-1);
  background-color: var(--color-grey-2);
  color: var(--color-grey-0);
  padding: 0 1rem;
  height: 3.5rem;
  width: 22rem;

  &:focus {
    border: 2px solid var(--color-grey-1);
  }

  @media (max-width: 800px) {
    width: 20rem;
  }
`;