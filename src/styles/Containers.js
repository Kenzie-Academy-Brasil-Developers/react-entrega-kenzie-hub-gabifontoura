import styled from "styled-components";


export const Container = styled.main`

    width: 100vw;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 21.5rem 0 21.5rem;
    gap:2rem;


    @media (max-width: 800px) {
        padding: 1rem ;
  
   }
`

export const Container2 = styled.main`

    width: 100vw;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 28.5rem 0 28.5rem;
    gap:2rem;

    @media (max-width: 1100px) {

        padding: 3rem 19rem 0 19.5rem;
        
        width: 100%;
        
    }
    
    @media (max-width: 800px) {
        padding: 2rem 1rem 0 1rem;
        
    
   }
`