import * as S from "./styles";
import { MdOutlineEmail } from "react-icons/md";
import SectionBackground from "../SectionBackground";
import SectionTitle from "../SectionTitle";

const Contact = () => {
  return (
    <SectionBackground id="contact">
      <SectionTitle>Contato</SectionTitle>
      <S.StyledContainer>
        <S.Form
          action="https://S.Formsubmit.co/phenrique.santana@hotmail.com"
          method="POST"
        >
          <S.FieldBox>
            <S.Label htmlFor="name">Nome</S.Label>
            <input id="name" type="text" name="name" required />
          </S.FieldBox>
          <S.FieldBox>
            <S.Label htmlFor="email">Email</S.Label>
            <input id="email" type="email" name="email" required />
          </S.FieldBox>
          <S.FieldBox>
            <S.Label htmlFor="msg">Mensagem</S.Label>
            <S.TextArea id="msg" name="message" rows={10} required />
          </S.FieldBox>
          <S.Submit type="submit">
            <MdOutlineEmail />
            Enviar
          </S.Submit>
        </S.Form>
        <S.Contacts>
          <S.Contact href="https://wa.me/5511933123649" target="_blank">
            <S.WhatsappIcon />
            <span>+55 11 933123649</span>
          </S.Contact>
          <S.Contact
            href="https://www.linkedin.com/in/paulo-henrique-santana-da-silva-3479821bb/"
            target="_blank"
          >
            <S.LinkedinIcon />
            <span>Paulo Henrique</span>
          </S.Contact>
          <S.Contact
            href="mailto:phenrique.santana@hotmail.com"
            target="_blank"
          >
            <S.EmailIcon />
            <span>phenrique.santana@hotmail.com</span>
          </S.Contact>
        </S.Contacts>
      </S.StyledContainer>
    </SectionBackground>
  );
};

export default Contact;
