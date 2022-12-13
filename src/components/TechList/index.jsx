import React, { useContext } from "react";

import { TechContext } from "../../providers/TechContext";
import TechUpdateModal from "../TechModalUpdate";

import { StyledTechList } from "./styles";
import TechCard from "./TechCard";

const TechList = () => {
  const { techList, isModalUpdateVisible } = useContext(TechContext);

  return (
    <StyledTechList>
      {isModalUpdateVisible && <TechUpdateModal />}

      {techList &&
        techList.map((tech) => <TechCard key={tech.id} tech={tech} />)}
    </StyledTechList>
  );
};

export default TechList;
