import React from 'react'
import Header from '../../components/Header'
import LoginForm from '../../components/LoginForm'
import { Container2 } from '../../styles/Containers'

import { StyledLoginPage } from './styles'

const LoginPage = ({userLogin}) => {
    
  return (
    <StyledLoginPage>

        <Container2>

            <Header />
            <LoginForm userLogin={userLogin}/>
        </Container2>

    </StyledLoginPage>
    
  )
}

export default LoginPage