import { useRef } from "react";
import * as S from "./styles";

interface Props {
  className?: string;
  ["data-active"]?: boolean;
}

const Nav: React.FC<Props> = ({ className, ["data-active"]: dataActive }) => {
  const nav = useRef<HTMLElement>(null);

  const handleClickLink = ({ target }: React.MouseEvent) => {
    nav.current
      ?.querySelectorAll("a")
      .forEach((a) => a.classList.remove("active"));

    if (target instanceof HTMLAnchorElement) target.classList.add("active");
  };

  return (
    <nav ref={nav} className={className} data-active={dataActive}>
      <S.Ul>
        <li>
          <S.A onClick={handleClickLink}>Início</S.A>
        </li>
        <li>
          <S.A onClick={handleClickLink}>Sobre</S.A>
        </li>
        <li>
          <S.A onClick={handleClickLink}>Conhecimentos</S.A>
        </li>
        <li>
          <S.A onClick={handleClickLink}>Projetos</S.A>
        </li>
      </S.Ul>
    </nav>
  );
};

export default Nav;
