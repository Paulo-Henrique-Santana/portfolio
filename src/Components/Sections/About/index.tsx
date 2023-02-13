import Title from "../../Title";
import * as S from "./styles";

const About = () => {
  return (
    <S.About id="about">
      <S.StyledContainer>
        <Title>Sobre Mim</Title>
        <S.TextAbout>
          <S.LeftQuote />
          Tenho 21 anos e moro na Zona Sul de São Paulo. Sou formado como
          Técnico em Desenvolvimento de Sistemas pela ETEC e estou no 2º
          semestre do curso de Ciência da Computação pela UNIP. Sou um
          desenvolvedor focado e totalmente interessado em aprimorar meus
          conhecimentos, atualmente dedico a maior parte do meu tempo estudando
          tecnologias voltadas para o Front-End através de cursos online, lendo
          documentações e desenvolvendo projetos como este para aplicar todo o
          conhecimento que adquiro.
          <S.RightQuote />
        </S.TextAbout>
      </S.StyledContainer>
    </S.About>
  );
};

export default About;
