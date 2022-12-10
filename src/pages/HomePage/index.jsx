import React, { useContext } from "react";

import Header from "../../components/Header";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/buttons";
import { StyledFlexBox, StyledFlexBoxCol } from "../../styles/StyledFlexBox";
import { StyledText } from "../../styles/typhography";
import { StyledHomePage } from "./styles";

const HomePage = () => {

  const { user, userLogout } = useContext(UserContext)
  
  return (
    
    <StyledHomePage>
      <StyledFlexBox>
        <Header />
        {user && (
          <StyledButton
            buttonSize="medium"
            buttonStyle="darkGrey"
            onClick={() => userLogout()}
          >
            Sair
          </StyledButton>
        )}
      </StyledFlexBox>

      {user && (
        <StyledFlexBoxCol>
          <StyledFlexBox>
            <StyledText tag="h2" fontSize="three">Olá, {user.name}</StyledText>
            <StyledText tag="p" fontSize="bodyText">
              {user.course_module}
            </StyledText>
          </StyledFlexBox>

          <StyledText tag="h3">
            Que pena! Estamos em desenvolvimento :(
          </StyledText>
          <StyledText tag="h4">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </StyledText>
        </StyledFlexBoxCol>
      )}
    </StyledHomePage>
  );
};

export default HomePage;
