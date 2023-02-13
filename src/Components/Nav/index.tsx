import { useRef, useEffect, useState } from "react";
import * as S from "./styles";

interface Props {
  className?: string;
  ["data-active"]?: boolean;
}

const Nav: React.FC<Props> = ({ className, ["data-active"]: dataActive }) => {
  const nav = useRef<HTMLElement>(null);

  const handleClickLink = (event: React.MouseEvent) => {
    event.preventDefault();

    const { currentTarget } = event;
    const href = currentTarget.getAttribute("href");

    if (href) {
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const links = nav.current?.querySelectorAll("a");
    links?.forEach((a) => a.classList.remove("active"));
    currentTarget.classList.add("active");
  };

  return (
    <nav ref={nav} className={className} data-active={dataActive}>
      <S.Ul>
        <li>
          <S.A href="#home" onClick={handleClickLink}>
            Início
          </S.A>
        </li>
        <li>
          <S.A href="#about" onClick={handleClickLink}>
            Sobre
          </S.A>
        </li>
        <li>
          <S.A href="#skills" onClick={handleClickLink}>
            Conhecimentos
          </S.A>
        </li>
        <li>
          <S.A href="#projects" onClick={handleClickLink}>
            Projetos
          </S.A>
        </li>
      </S.Ul>
    </nav>
  );
};

export default Nav;
