import * as S from "./styles";
import { FaArrowLeft } from "react-icons/fa";

const EmailSucess = () => {
  return (
    <S.Background>
      <S.StyledContainer>
        <S.CheckIcon />
        <S.Title>Email enviado com sucesso!</S.Title>
        <S.Msg>Em breve entrarei em contato.</S.Msg>
        <S.BackButton to="/">
          <FaArrowLeft />
          Voltar
        </S.BackButton>
      </S.StyledContainer>
    </S.Background>
  );
};

export default EmailSucess;
