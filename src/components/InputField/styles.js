import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledLabel = styled.label`
  color: var(--color-grey-0);
`;

export const StyledInput = styled.input`


  
  border: none;
  border-radius: var(--radius-1);
  background-color: var(--color-grey-2);
  color: var(--color-grey-0);
  padding: 0 1rem;
  height: 3.5rem;
  width: 22rem;

  &:focus {
    
    outline: 2px solid var(--color-primary-focus);
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
