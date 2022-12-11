import React, { useContext } from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/typhography";
import InputField from "../InputField";
import {
  StyledFieldset,
  StyledLabel,
  StyledSelect,
} from "../InputField/styles";
import { StyledModalBox, StyledModalBg } from "./styles";
import { CgClose } from "react-icons/cg";
import { TechContext } from "../../providers/TechContext";

const TechCreateModal = () => {

const { setIsModalVisible } = useContext(TechContext);

  return (
    <StyledModalBg>
      <StyledModalBox>
        <div className="modal-header">
          <StyledText tag="h5">Cadastrar Tecnologia</StyledText>
          <StyledButton onClick={() => setIsModalVisible(false)}>
            <CgClose/>
          </StyledButton>
        </div>

        <div className="modal-content">

        <InputField
          type="text"
          id="title"
          label="Nome"
          placeholder="Digite aqui o nome da tecnologia"
        />

        <StyledFieldset>
          <StyledLabel>Selecionar status</StyledLabel>
          <StyledSelect>
            <option value="">Selecionar status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyledSelect>
        </StyledFieldset>

        <StyledButton buttonStyle="primary" buttonSize="default">
          Cadastrar
        </StyledButton>

        </div>
      </StyledModalBox>
    </StyledModalBg>
  );
};

export default TechCreateModal;
