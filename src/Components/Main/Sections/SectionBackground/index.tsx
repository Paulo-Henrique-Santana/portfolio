import React from "react";
import * as S from "./styles";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  id?: string;
}

const SectionBackground: React.FC<Props> = ({ children, className, id }) => {
  return (
    <S.SectionBackground className={className} id={id}>
      {children}
    </S.SectionBackground>
  );
};

export default SectionBackground;
