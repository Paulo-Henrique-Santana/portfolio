import styled, { keyframes } from "styled-components";
import DarkMode from "../Svg/DarkMode/DarkMode";
import LightMode from "../Svg/LightMode/LightMode";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 25px;
  background-color: var(--color3);
`;

export const Name = styled.span`
  padding: 0 20px;
  font-size: 1.5rem;
  position: relative;
  user-select: none;
  ::before {
    content: "{ ";
    color: var(--color2);
    position: absolute;
    left: 0;
    top: -2px;
  }
  ::after {
    content: " }";
    color: var(--color2);
    position: absolute;
    right: 0;
    top: -2px;
  }
`;

export const Nav = styled.nav``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  color: var(--color1);
`;

export const Links = styled.ul`
  display: flex;
  gap: 20px;
`;

const hoverLink = keyframes`
  from {
    width: 1px;
  }
  to {
    width: calc(100% - 14px);
  }
`;

export const Link = styled.a`
  padding: 7px;
  color: #e5e5e5;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: white;
  }
  &.active {
    color: white;
  }
  ::after {
    content: "";
    height: 2px;
    position: absolute;
    bottom: 1px;
    left: 7px;
    background-color: var(--color2);
  }
  &.active::after {
    width: calc(100% - 14px);
    animation: ${hoverLink} 0.5s forwards;
  }
`;

export const ContainerThemeMode = styled.div`
  display: flex;
  align-items: center;
`;

export const SVGDarkMode = styled(DarkMode)`
  width: 25px;
  height: 25px;
  * {
    fill: #e5e5e5;
  }
`;

export const InputThemeMode = styled.input`
  visibility: hidden;
  position: absolute;
`;

export const LabelThemeMode = styled.label`
  display: flex;
  align-items: center;
  margin: 0 10px;
  padding: 0 3px;
  border-radius: 15px;
  width: 55px;
  height: 25px;
  background-color: var(--color1);
`;

export const Ball = styled.div`
  width: 21px;
  height: 21px;
  background-color: var(--color3);
  border-radius: 50px;
`;

export const SVGLightMode = styled(LightMode)`
  width: 25px;
  height: 25px;
  * {
    fill: #e5e5e5;
  }
`;
