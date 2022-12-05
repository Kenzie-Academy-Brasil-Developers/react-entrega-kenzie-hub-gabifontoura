import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/typhography";
import InputField from "../InputField";
import { StyledForm } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";

const LoginForm = ({ userLogin }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submit = (data) => {
    userLogin(data, setLoading);
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledText tag="h2" textAlign="center">
        Login
      </StyledText>

      <InputField
        type="email"
        id="email"
        label="Email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disabled={loading}
      />
      {errors.email?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.email.message}
        </StyledText>
      )}

      <InputField
        type="password"
        id="password"
        label="Senha"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        disabled={loading}
      />
      {errors.password?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.password.message}
        </StyledText>
      )}

      <StyledButton type="submit" buttonStyle="primary" buttonSize="default">
        {loading ? "Entrando" : "Entrar"}
      </StyledButton>

      <StyledText tag="p" fontSize="bodyText" textAlign="center">
        Ainda não possui uma conta?
      </StyledText>

      <Link to="/register">Cadastrar</Link>
    </StyledForm>
  );
};

export default LoginForm;
