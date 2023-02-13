import React from "react";
import * as S from "./styles";

interface Props {
  children: string;
}

const Title: React.FC<Props> = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export default Title;
