import { Outlet, useNavigate } from "react-router-dom";

import React, { useContext, useEffect } from "react";
import { StyledText } from "../../styles/typhography";
import { UserContext } from "../../providers/UserContext";

const ProtectedRoutes = () => {
  const navigate= useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <StyledText tag="h1" color="black" textAlign="center">
          Carregando...
        </StyledText>
      )}
    </>
  );
};

export default ProtectedRoutes;
