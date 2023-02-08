import styled from "styled-components";
import DarkMode from "../../Svg/DarkMode/DarkMode";
import LightMode from "../../Svg/LightMode/LightMode";

export const ContainerThemeMode = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const SVGDarkMode = styled(DarkMode)`
  width: 20px;
  height: 20px;
  * {
    fill: ${(props) => props.theme.colors.primary};
  }
  /* @media (max-width: 480px) {
    width: 15px;
    height: 15px;
  } */
  @media (max-width: 310px) {
    display: none;
  }
`;

export const SVGLightMode = styled(LightMode)`
  width: 20px;
  height: 20px;
  * {
    fill: ${(props) => props.theme.colors.primary};
  }
  /* @media (max-width: 480px) {
    width: 15px;
    height: 15px;
  } */
  @media (max-width: 310px) {
    display: none;
  }
`;
