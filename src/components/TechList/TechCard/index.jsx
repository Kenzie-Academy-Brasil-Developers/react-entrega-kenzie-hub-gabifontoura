import React from "react";
import { StyledFlexBox } from "../../../styles/StyledFlexBox";
import { FiTrash2 } from "react-icons/fi";

import { StyledText } from "../../../styles/typhography";

import { StyledTechCard } from "./styles";
import { StyledButton } from "../../../styles/buttons";

const TechCard = ({ tech }) => {
  console.log(tech.status);
  return (
    <StyledTechCard>
      <StyledText tag="h3">{tech.title}</StyledText>
      <StyledFlexBox>
        <StyledText tag="p" fontSize="bodyText">
          {tech.status}
        </StyledText>
        <StyledButton>
          <FiTrash2 color="white" />
        </StyledButton>
      </StyledFlexBox>
    </StyledTechCard>
  );
};

export default TechCard;
