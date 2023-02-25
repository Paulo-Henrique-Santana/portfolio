import styled from "styled-components";
import Container from "../../../../Container";
import { FaDownload } from "react-icons/fa";
import SectionBackground from "../../SectionBackground";

export const Home = styled(SectionBackground)`
  height: 100vh;
`;

export const StyledContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text1};
`;

export const WelcomeMsg = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text1};
  @media (max-width: 800px) {
    font-size: 1.3rem;
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
  margin-top: 0.35rem;
  font-size: 1.3rem;
  font-weight: normal;
  color: ${(props) => props.theme.colors.text2};
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;

export const DownloadCV = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 0.8rem;
  border: 2px solid ${(props) => props.theme.colors.secundary};
  border-radius: 5px;
  padding: 0.7rem;
  max-width: max-content;
  color: ${(props) => props.theme.colors.secundary};
  background-color: transparent;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.colors.background1};
    background-color: ${(props) => props.theme.colors.secundary};
  }
  &:hover svg {
    color: ${(props) => props.theme.colors.background1};
  }
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const DownloadIcon = styled(FaDownload)`
  color: ${(props) => props.theme.colors.secundary};
  transition: all 0.4s ease-in-out;
  font-size: 1.1rem;
`;
