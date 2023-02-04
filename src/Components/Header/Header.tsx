import { useRef, useState } from "react";
import * as S from "./styles";

const Header = () => {
  const links = useRef<HTMLUListElement>(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleClickLink = ({ target }: React.MouseEvent) => {
    links.current
      ?.querySelectorAll("a")
      .forEach((a) => a.classList.remove("active"));

    if (target instanceof HTMLAnchorElement) target.classList.add("active");
  };

  return (
    <S.Header>
      <S.Container>
        <S.Name>Paulo Henrique</S.Name>
        <S.Nav>
          <S.Links ref={links}>
            <li>
              <S.Link onClick={handleClickLink}>Home</S.Link>
            </li>
            <li>
              <S.Link onClick={handleClickLink}>Sobre</S.Link>
            </li>
            <li>
              <S.Link onClick={handleClickLink}>Conhecimentos</S.Link>
            </li>
            <li>
              <S.Link onClick={handleClickLink}>Projetos</S.Link>
            </li>
          </S.Links>
        </S.Nav>
        <S.ContainerThemeMode>
          <S.SVGDarkMode />
          <S.LabelThemeMode htmlFor="theme-mode">
            <S.InputThemeMode
              onClick={() => setDarkMode(!darkMode)}
              type="checkbox"
              id="theme-mode"
            />
            <S.Ball></S.Ball>
          </S.LabelThemeMode>
          <S.SVGLightMode />
        </S.ContainerThemeMode>
      </S.Container>
    </S.Header>
  );
};

export default Header;
