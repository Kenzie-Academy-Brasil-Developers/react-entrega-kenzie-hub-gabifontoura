import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import { StyledFlexBox, StyledFlexBoxCol } from '../../styles/StyledFlexBox'
import { StyledText } from '../../styles/typhography'
import { StyledHomePage } from './styles'

const HomePage = ({user}) => {
    console.log(user)
  return (
    <StyledHomePage>
        <StyledFlexBox>

            <Header />
            {user && (<Link to="/">Sair</Link>)}
            
            
        </StyledFlexBox>

        {user && (
            <StyledFlexBoxCol>
                <StyledFlexBox>

                    <StyledText tag="h2">Olá, {user.name}</StyledText>
                    <StyledText tag ="p" fontSize="bodyText">{user.course_module}</StyledText>
                </StyledFlexBox>

                <StyledText tag="h3">Que pena! Estamos em desenvolvimento :( </StyledText>
                <StyledText tag="h4">Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledText>
            </StyledFlexBoxCol>

        
        )}

    </StyledHomePage>
  )
}

export default HomePage