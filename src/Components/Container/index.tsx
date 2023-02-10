import * as S from "./styles";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return <S.Container className={className}>{children}</S.Container>;
};

export default Container;
