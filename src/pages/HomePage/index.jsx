import React, { useContext } from "react";
import Header from "../../components/Header";
import TechList from "../../components/TechList";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/buttons";
import { ContainerHome } from "../../styles/Containers";
import { StyledFlexBox, StyledFlexBoxCol } from "../../styles/StyledFlexBox";
import { StyledText } from "../../styles/typhography";
import { StyledHomePage } from "./styles";
import { GoPlus } from "react-icons/go"
import { TechContext } from "../../providers/TechContext";
import TechCreateModal from "../../components/TechModalCreate";

const HomePage = () => {
  const { user, userLogout } = useContext(UserContext);
  const { isModalVisible, setIsModalVisible } = useContext(TechContext);

  return (
 
      <StyledHomePage>

        <div className="lines"></div>
        
        <ContainerHome>
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
            <StyledFlexBox className="intro">
              <StyledText tag="h2" fontSize="three">
                Olá, {user.name}
              </StyledText>
              <StyledText tag="p" fontSize="bodyText">
                {user.course_module}
              </StyledText>
            </StyledFlexBox>
          )}

          <StyledFlexBoxCol>
            <StyledFlexBox>

              <StyledText tag="h2">Tecnologias</StyledText>

              <StyledButton buttonStyle="darkGrey" className="btn-plus" onClick={ () => setIsModalVisible(true)} >
                 <GoPlus />
              </StyledButton>

            </StyledFlexBox>
            <TechList />
          </StyledFlexBoxCol>
        </ContainerHome>

              {isModalVisible && <TechCreateModal /> }

      </StyledHomePage>
  
  );
};

export default HomePage;
