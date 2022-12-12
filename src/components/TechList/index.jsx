import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

import { StyledTechList } from "./styles";
import TechCard from "./TechCard";

const TechList = () => {
  const { user } = useContext(UserContext);
  const techList = user.techs;

  return (
    <StyledTechList>
      {techList.map((tech, index) => (
        <TechCard key={index} tech={tech} />
      ))}
    </StyledTechList>
  );
};

export default TechList;
