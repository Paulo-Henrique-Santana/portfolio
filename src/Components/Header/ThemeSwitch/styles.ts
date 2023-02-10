import styled from "styled-components";
import DarkMode from "../../Svg/DarkMode";
import LightMode from "../../Svg/LightMode";

export const ContainerThemeMode = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const SVGDarkMode = styled(DarkMode)`
  width: 20px;
  height: 20px;
  * {
    fill: ${(props) => props.theme.colors.primary};
  }
  @media (max-width: 325px) {
    display: none;
  }
`;

export const SVGLightMode = styled(LightMode)`
  width: 20px;
  height: 20px;
  * {
    fill: ${(props) => props.theme.colors.primary};
  }
  @media (max-width: 325px) {
    display: none;
  }
`;
