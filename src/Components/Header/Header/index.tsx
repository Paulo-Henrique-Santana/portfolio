import ThemeSwitch from "../ThemeSwitch";
import * as S from "./styles";

interface Props {
  toggleTheme(): void;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenu: boolean;
}

const Header: React.FC<Props> = ({
  toggleTheme,
  mobileMenu,
  setMobileMenu,
}) => {
  return (
    <S.Header>
      <S.Container>
        <S.Name>
          <span>Paulo</span> <span>Henrique</span>
        </S.Name>
        <S.StyledNav />
        <S.RightContainer>
          <ThemeSwitch toggleTheme={toggleTheme} />
          <S.MenuMobile
            onClick={() => setMobileMenu(!mobileMenu)}
            data-active={mobileMenu}
          />
        </S.RightContainer>
      </S.Container>
    </S.Header>
  );
};

export default Header;
