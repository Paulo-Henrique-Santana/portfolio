import React from "react";
import * as S from "./styles";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  id?: string;
}

const BackgroundSection: React.FC<Props> = ({ children, className, id }) => {
  return (
    <S.BackgroundSection className={className} id={id}>
      {children}
    </S.BackgroundSection>
  );
};

export default BackgroundSection;
