import React, { useState } from "react";
import Header from "../../components/Header";
import SignUpForm from "../../components/SignUpForm";
import { api } from "../../services/api";
import { Container } from "../../styles/Containers";
import { StyledRegisterPage } from "./styles";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";
import { StyledFlexBox } from "../../styles/StyledFlexBox";


const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const userRegister = async (formData) => {
    try {
        setLoading(true);
        const response = await api.post("users", formData);
        toast.success(response.statusText)
     
    } catch (error) {
        toast.error(error.response.data.message)
      
    } finally {
        setLoading(false);
    }
  };

  return (
    <StyledRegisterPage>
      <Container>
        <StyledFlexBox>
            <Header />
            <Link to="/">Voltar</Link>
        </StyledFlexBox>
        <SignUpForm loading={loading} userRegister={userRegister}/>
      </Container>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
