import * as I from "react-icons/bs";
import * as S from "./styles";

const SocialMedia = () => {
  return (
    <nav>
      <S.SocialMedia>
        <li>
          <a href="https://github.com/Paulo-Henrique-Santana" target="_blank">
            <I.BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/paulo-henrique-santana-da-silva-3479821bb/"
            target="_blank"
          >
            <I.BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5511933123649" target="_blank">
            <I.BsWhatsapp />
          </a>
        </li>
      </S.SocialMedia>
    </nav>
  );
};

export default SocialMedia;
