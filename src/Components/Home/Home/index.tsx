import React from "react";
import ReactLogo from "../ReactLogo";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Home>
      {/* <S.Photo/> */}
      <S.StyledContainer>
        <div>
          <S.WelcomeMsg>Seja bem-vindo(a)!</S.WelcomeMsg>
          <S.Name>Paulo Henrique</S.Name>
          <S.Profession>Desenvolvedor Front-End</S.Profession>
          <S.DownloadCV
            href="../../../curriculo_paulo_henrique.pdf"
            download="cv-paulo-henrique"
          >
            <S.SVGDownload />
            Download CV
          </S.DownloadCV>
        </div>
        <ReactLogo />
      </S.StyledContainer>
    </S.Home>
  );
};

export default Home;
