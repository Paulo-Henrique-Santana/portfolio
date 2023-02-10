import React from "react";
import * as S from "./styles";

const ReactLogo: React.FC = () => {
  return (
    <S.ReactLogoContainer>
      <S.ReactLogoBall />
      <S.ReactLogoRing />
      <S.ReactLogoRing />
      <S.ReactLogoRing />
    </S.ReactLogoContainer>
  );
};

export default ReactLogo;
