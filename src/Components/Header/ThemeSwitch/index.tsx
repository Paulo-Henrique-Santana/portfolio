import { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import * as S from "./styles";

interface Props {
  toggleTheme(): void;
}

const ThemeSwitch: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [smallSwitch, setSmallSwitch] = useState(
    window.screen.width <= 480 ? true : false
  );

  useEffect(() => {
    const handleSwitchProps = () => {
      setSmallSwitch(window.screen.width <= 480 ? true : false);
    };
    window.addEventListener("resize", handleSwitchProps);
  }, []);

  return (
    <S.ContainerThemeMode>
      <S.SVGDarkMode />
      <Switch
        onChange={toggleTheme}
        checked={title === "light"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={smallSwitch ? 40 : 45}
        handleDiameter={14}
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
