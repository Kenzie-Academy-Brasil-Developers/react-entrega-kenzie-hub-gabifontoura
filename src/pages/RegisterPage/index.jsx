import React from "react";
import Header from "../../components/Header";
import SignUpForm from "../../components/SignUpForm";

import { Container } from "../../styles/Containers";
import { StyledRegisterPage } from "./styles";

import { NavLink } from "react-router-dom";
import { StyledFlexBox } from "../../styles/StyledFlexBox";

const RegisterPage = () => {


  return (
    <StyledRegisterPage>
      <Container>
        <StyledFlexBox>
          <Header />
          <NavLink to="/" className="main-nav-active">
            Voltar
          </NavLink>
        </StyledFlexBox>
        <SignUpForm/>
      </Container>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
