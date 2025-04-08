import styled from "styled-components";

const gapProjects = "3rem";

export const Projects = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${gapProjects};
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Project = styled.li`
  flex: 1 1 calc(50% - ${gapProjects});
  box-shadow: 0px 0px 5px rgb(0 0 0 / 20%);
  border-radius: 5px;
  border-bottom: 3px solid ${(props) => props.theme.colors.secundary};
  background-color: ${(props) => props.theme.colors.background2};
  max-width: calc(50% - ${gapProjects});

  @media (max-width: 800px) {
    flex: 1;
    max-width: max-content;
  }
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
  gap: 0.3rem;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Name = styled.h3`
  font-size: 1.4rem;
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
  margin: 0.5rem 0;
  height: 80px;
  color: ${(props) => props.theme.colors.text2};
  @media (max-width: 400px) {
    height: 100px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  @media (max-width: 400px) {
    gap: 1rem;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: bold;
  transition: all 0.3s;
  svg {
    font-size: 1.1rem;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background2};
  }
  @media (max-width: 400px) {
    padding: 0.4rem;
    gap: 0.2rem;
    font-size: 0.8rem;
    svg {
      font-size: 1rem;
    }
  }
`;
