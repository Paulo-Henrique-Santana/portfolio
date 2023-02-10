import { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import * as S from "./styles";

interface Props {
  toggleTheme(): void;
}

const ThemeSwitch: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <S.ContainerThemeMode>
      <S.SVGDarkMode />
      <Switch
        onChange={toggleTheme}
        checked={title === "light"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={21}
        width={40}
        handleDiameter={15}
        onColor={colors.primary}
        offColor={colors.primary}
        onHandleColor={colors.background}
        offHandleColor={colors.background}
      />
      <S.SVGLightMode />
    </S.ContainerThemeMode>
  );
};

export default ThemeSwitch;
