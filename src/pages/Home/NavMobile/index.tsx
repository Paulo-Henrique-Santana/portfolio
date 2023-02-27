import * as S from "./styles";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile: React.FC<Props> = ({ active, setActive }) => {
  return <S.StyledNav data-active={active} onClick={() => setActive(false)} />;
};

export default NavMobile;
