import SectionTitle from "../SectionTitle";
import * as S from "./styles";

const About = () => {
  return (
    <S.About id="about">
      <S.StyledContainer>
        <SectionTitle>Sobre Mim</SectionTitle>
        <S.TextAbout>
          <S.LeftQuote />
          Atualmente, minha atenção está direcionada para a área de
          desenvolvimento web, onde tenho tido a oportunidade de aprimorar
          minhas habilidades e criar experiências. A busca constante por
          aprender novas tecnologias e encontrar maneiras mais eficazes de
          desenvolver é a minha principal motivação. Estou entusiasmado em
          continuar crescendo profissionalmente e contribuindo para projetos
          desafiadores.
          <S.RightQuote />
        </S.TextAbout>
      </S.StyledContainer>
    </S.About>
  );
};

export default About;
