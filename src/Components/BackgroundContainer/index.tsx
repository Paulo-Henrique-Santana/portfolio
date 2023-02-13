import React from "react";
import * as S from "./styles";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  id?: string;
}

const BackgroundContainer: React.FC<Props> = ({ children, className, id }) => {
  return (
    <S.BackgroundContainer className={className} id={id}>
      {children}
    </S.BackgroundContainer>
  );
};

export default BackgroundContainer;
