import React from "react";
import Title from "../../Title";
import * as SI from "react-icons/si";
import * as DI from "react-icons/di";
import * as S from "./styles";

const Skills: React.FC = () => {
  return (
    <S.Background id="skills">
      <S.StyledContainer>
        <Title>Conhecimentos</Title>
        <S.Skills>
          <S.Skill>
            <SI.SiStyledcomponents
              style={{
                color: "#db7093",
              }}
            />
            <p>Styled-Components</p>
          </S.Skill>
          <S.Skill>
            <SI.SiReact
              style={{
                color: "#5ed3f3",
              }}
            />
            <p>React</p>
          </S.Skill>
          <S.Skill>
            <SI.SiTypescript
              style={{
                color: "#0076c6",
              }}
            />
            <p>TypeScript</p>
          </S.Skill>
          <S.Skill>
            <SI.SiJavascript
              style={{
                color: "#efd81d",
              }}
            />
            <p>JavaScript</p>
          </S.Skill>
          <S.Skill>
            <DI.DiSass
              style={{
                color: "#c76494",
              }}
            />
            <p>SASS</p>
          </S.Skill>
          <S.Skill>
            <SI.SiCss3
              style={{
                color: "#2862e9",
              }}
            />
            <p>CSS3</p>
          </S.Skill>
          <S.Skill>
            <SI.SiHtml5
              style={{
                color: "#e96228",
              }}
            />
            <p>HTML5</p>
          </S.Skill>
          <S.Skill>
            <SI.SiGit
              style={{
                color: "#e84d31",
              }}
            />
            <p>Git</p>
          </S.Skill>
        </S.Skills>
      </S.StyledContainer>
    </S.Background>
  );
};

export default Skills;
