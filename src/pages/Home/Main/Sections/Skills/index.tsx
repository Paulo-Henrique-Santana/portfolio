import React from "react";
import SectionTitle from "../SectionTitle";
import technologiesIcons from "../../../../../utilities/technologiesIcons";
import * as S from "./styles";

const Skills: React.FC = () => {
  return (
    <S.Background id="skills">
      <S.StyledContainer>
        <SectionTitle>Habilidades</SectionTitle>
        <S.Skills>
          {Object.entries(technologiesIcons).map(([key, value], index) => (
            <S.Skill key={index}>
              {value}
              <p>{key}</p>
            </S.Skill>
          ))}
        </S.Skills>
      </S.StyledContainer>
    </S.Background>
  );
};

export default Skills;
