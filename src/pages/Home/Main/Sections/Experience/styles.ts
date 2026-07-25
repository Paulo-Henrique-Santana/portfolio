import styled from "styled-components";
import SectionBackground from "../SectionBackground";
import Container from "../../../../../Components/Container";

export const Experience = styled(SectionBackground)``;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Timeline = styled.ul`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 1rem;
`;

export const Item = styled.li`
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid ${(props) => props.theme.colors.secundary};

  &::before {
    content: "";
    position: absolute;
    left: -7px;
    top: 0.35rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.secundary};
  }

  @media (max-width: 600px) {
    padding-left: 1.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const Company = styled.h3`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text1};

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const Role = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text2};

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Period = styled.span`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.secundary};
`;

export const Responsibilities = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Responsibility = styled.li`
  position: relative;
  padding-left: 1rem;
  color: ${(props) => props.theme.colors.text2};
  font-size: 1.05rem;
  line-height: 1.7rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65rem;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.secundary};
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    line-height: 1.5rem;
  }
`;
