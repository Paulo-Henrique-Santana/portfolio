import React from "react";
import * as S from "./styles";

interface Props {
  className?: string;
  children: string;
}

const SectionTitle: React.FC<Props> = ({ children, className }) => {
  return <S.SectionTitle className={className}>{children}</S.SectionTitle>;
};

export default SectionTitle;
