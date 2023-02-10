import styled, { keyframes } from "styled-components";
import Container from "../../Container";
import Download from "../../Svg/Download";

export const Home = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const StyledContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20rem 0;
  color: ${(props) => props.theme.colors.text1};
  @media (max-width: 800px) {
    padding: 16rem 0;
  }
`;

export const WelcomeMsg = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.text1};
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Name = styled.h1`
  margin-top: 0.8rem;
  font-size: 3.3rem;
  color: ${(props) => props.theme.colors.secundary};
  @media (max-width: 800px) {
    font-size: 2.7rem;
  }
  @media (max-width: 600px) {
    max-width: 200px;
  }
`;

export const Profession = styled.h2`
  margin-top: 0.4rem;
  font-size: 1.3rem;
  font-weight: normal;
  color: #bfc0c0;
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;

export const DownloadCV = styled.a`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  border: 2px solid ${(props) => props.theme.colors.secundary};
  border-radius: 5px;
  padding: 0.6rem 0.9rem;
  max-width: max-content;
  color: ${(props) => props.theme.colors.secundary};
  background-color: transparent;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.secundary};
  }
  svg {
    fill: ${(props) => props.theme.colors.secundary};
    transition: all 0.4s ease-in-out;
  }
  &:hover svg {
    fill: ${(props) => props.theme.colors.background};
  }
  @media (max-width: 800px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.75rem;
  }
`;

export const SVGDownload = styled(Download)`
  width: 25px;
  height: 25px;
  @media (max-width: 800px) {
    width: 20px;
    height: 20px;
  }
`;
