import styled from "styled-components";

export const StyledFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap:3rem;

  @media (max-width: 800px) {
    margin: 0.6rem 2rem .6rem 0 ;
    justify-content: center;
  }

  @media (max-width: 400px) {
    margin: 0.6rem 0rem ;
  }
`;

export const StyledFlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  
`;
