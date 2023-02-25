import React from "react";
import * as S from "./styles";

interface Props {
  children: string;
}

const SectionTitle: React.FC<Props> = ({ children }) => {
  return <S.SectionTitle>{children}</S.SectionTitle>;
};

export default SectionTitle;
