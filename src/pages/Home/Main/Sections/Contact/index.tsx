import * as S from "./styles";
import { MdOutlineEmail } from "react-icons/md";
import SectionBackground from "../SectionBackground";
import SectionTitle from "../SectionTitle";

const Contact = () => {
  const contacts = [
    {
      href: "https://wa.me/5511933123649",
      icon: <S.WhatsappIcon />,
      text: "+55 11 933123649",
    },
    {
      href: "https://www.linkedin.com/in/paulo-henrique-3479821bb/",
      icon: <S.LinkedinIcon />,
      text: "Paulo Henrique",
    },
    {
      href: "mailto:phenrique.santana@hotmail.com",
      icon: <S.EmailIcon />,
      text: "phenrique.santana@hotmail.com",
    },
    {
      href: "https://github.com/Paulo-Henrique-Santana",
      icon: <S.GithubIcon />,
      text: "Paulo-Henrique-Santana",
    },
  ];

  return (
    <SectionBackground id="contact">
      <SectionTitle>Contato</SectionTitle>

      <S.StyledContainer>
        <S.Form
          action="https://formsubmit.co/phenrique.santana@hotmail.com"
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

          <input
            type="hidden"
            name="_next"
            value={`${window.location.href}thanks`}
          ></input>

          <S.Submit type="submit">
            <MdOutlineEmail />
            Enviar
          </S.Submit>
        </S.Form>

        <S.Contacts>
          {contacts.map((contact, index) => (
            <S.Contact key={index} href={contact.href} target="_blank">
              {contact.icon}
              <span>{contact.text}</span>
            </S.Contact>
          ))}
        </S.Contacts>
      </S.StyledContainer>
    </SectionBackground>
  );
};

export default Contact;
