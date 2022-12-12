import React, { useContext } from "react";
import { TechContext } from "../../providers/TechContext";


import { StyledTechList } from "./styles";
import TechCard from "./TechCard";

const TechList = () => {
  const { techList } = useContext(TechContext);

  return (
    <StyledTechList>
      {techList &&
        techList.map((tech) => <TechCard key={tech.id} tech={tech} />)}
    </StyledTechList>
  );
};

export default TechList;
