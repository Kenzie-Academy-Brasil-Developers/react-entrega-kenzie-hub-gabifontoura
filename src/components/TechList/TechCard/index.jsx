import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { StyledText } from "../../../styles/typhography";
import { StyledTechCard } from "./styles";
import { StyledButton } from "../../../styles/buttons";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

const TechCard = ({ tech }) => {

  const { removeTech } = useContext(TechContext)
  const [loading, setLoading] = useState(false);


  return (
    <StyledTechCard>
      <StyledText tag="h3">{tech.title}</StyledText>
      <div className="flex gap-1rem">
        <StyledText tag="p" fontSize="bodyText">
          {tech.status}
        </StyledText>
        <StyledButton onClick={()=> removeTech(tech.id, setLoading)} disabled={loading}>
          <FiTrash2 color="white" />
        </StyledButton>
      </div>
    </StyledTechCard>
  );
};

export default TechCard;
