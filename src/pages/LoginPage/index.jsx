import React from "react";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import { Container2 } from "../../styles/Containers";
import {StyledFlexBoxCol} from "../../styles/StyledFlexBox"
import { StyledLoginPage } from "./styles";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Container2>
        <StyledFlexBoxCol>
          <Header />
          <LoginForm />
        </StyledFlexBoxCol>
      </Container2>
    </StyledLoginPage>
  );
};

export default LoginPage;
