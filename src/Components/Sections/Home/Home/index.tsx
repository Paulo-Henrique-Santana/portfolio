import ReactLogo from "../ReactLogo";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Home id="home">
      <S.StyledContainer>
        <div>
          <S.WelcomeMsg>Seja bem-vindo(a)!</S.WelcomeMsg>
          <S.Name>Paulo Henrique</S.Name>
          <S.Profession>Desenvolvedor Front-End</S.Profession>
          <S.DownloadCV
            href="/cv_paulo_henrique.pdf"
            download="cv-paulo-henrique"
            type="application/pdf"
          >
            <S.DownloadIcon />
            Download CV
          </S.DownloadCV>
        </div>
        <ReactLogo />
      </S.StyledContainer>
    </S.Home>
  );
};

export default Home;
