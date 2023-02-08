import * as S from "./styles";

interface Props {
  active: boolean;
}

const NavMobile: React.FC<Props> = ({ active }) => {
  return (
    <div>
      <S.StyledNav data-active={active} />
    </div>
  );
};

export default NavMobile;
