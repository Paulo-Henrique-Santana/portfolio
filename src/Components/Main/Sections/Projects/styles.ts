import styled from "styled-components";

export const Projects = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Project = styled.li`
  flex: 1;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 20%);
  border-radius: 5px;
  border-bottom: 3px solid ${(props) => props.theme.colors.secundary};
  background-color: ${(props) => props.theme.colors.background2};
`;

export const Image = styled.img`
  border-radius: 5px 5px 0 0;
`;

export const About = styled.div`
  border-radius: 0 0 5px 5px;
  padding: 1rem;
`;

export const BoxNameAndTechnologies = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Name = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.text1};
`;

export const Technologies = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

export const Technology = styled.li`
  svg {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  display: flex;
  align-items: center;
  height: 4rem;
  color: ${(props) => props.theme.colors.text2};
  @media (max-width: 400px) {
    height: 5rem;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 10%);
  padding-top: 1rem;
  width: 100%;
`;

export const Link = styled.a`
  display: inline-block;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background2};
  }
`;
