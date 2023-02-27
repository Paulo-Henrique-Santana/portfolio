import { useRef, useEffect, useState } from "react";
import * as S from "./styles";

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
    { href: "#home", text: "Início" },
    { href: "#about", text: "Sobre" },
    { href: "#skills", text: "Conhecimentos" },
    { href: "#projects", text: "Projetos" },
    { href: "#contact", text: "Contato" },
  ];

  const handleClickLink = (event: React.MouseEvent) => {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");

    if (href) {
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
            <S.A href={link.href} onClick={handleClickLink}>
              {link.text}
            </S.A>
          </li>
        ))}
      </S.Ul>
    </nav>
  );
};

export default Nav;
