import { useRef, useEffect, useState } from "react";
import * as S from "./styles";
import smoothScrollOnClick from "../../../utilities/smoothScrollOnClick";

interface Props {
  className?: string;
  ["data-active"]?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Nav: React.FC<Props> = ({
  className,
  ["data-active"]: dataActive,
  onClick,
}) => {
  const nav = useRef<HTMLElement>(null);
  const links = [
    { href: "#about", text: "Sobre" },
    { href: "#skills", text: "Habilidades" },
    { href: "#projects", text: "Projetos" },
    { href: "#contact", text: "Contato" },
  ];

  return (
    <nav
      ref={nav}
      className={className}
      data-active={dataActive}
      onClick={onClick}
    >
      <S.Ul>
        {links.map((link, index) => (
          <li key={index}>
            <S.A href={link.href} onClick={smoothScrollOnClick}>
              {link.text}
            </S.A>
          </li>
        ))}
      </S.Ul>
    </nav>
  );
};

export default Nav;
