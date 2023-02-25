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

  return (
    <nav
      ref={nav}
      className={className}
      data-active={dataActive}
      onClick={onClick}
    >
      <S.Ul>
        <li>
          <S.A href="#home">Início</S.A>
        </li>
        <li>
          <S.A href="#about">Sobre</S.A>
        </li>
        <li>
          <S.A href="#skills">Conhecimentos</S.A>
        </li>
        <li>
          <S.A href="#projects">Projetos</S.A>
        </li>
      </S.Ul>
    </nav>
  );
};

export default Nav;
