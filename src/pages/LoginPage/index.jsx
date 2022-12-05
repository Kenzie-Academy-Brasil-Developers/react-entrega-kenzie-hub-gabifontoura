import React from 'react'
import Header from '../../components/Header'
import LoginForm from '../../components/LoginForm'
import { Container } from '../../styles/Container'

import { StyledLoginPage } from './styles'

const LoginPage = ({userLogin}) => {
    
  return (
    <StyledLoginPage>

        <Container>

            <Header />
            <LoginForm userLogin={userLogin}/>
        </Container>

    </StyledLoginPage>
    
  )
}

export default LoginPage