import Container from "../../../Container";
import SectionBackground from "../SectionBackground";
import SectionTitle from "../SectionTitle";
import reactshoes from "../../../../images/reactshoes.png";
import pokedex from "../../../../images/pokedex.png";
import technologiesIcons from "../../../../utilities/technologiesIcons";
import * as S from "./styles";

const Projects = () => {
  const projects = [
    {
      src: reactshoes,
      name: "ReactShoes",
      technologies: [
        "Styled-Components",
        "React",
        "JavaScript",
        "CSS3",
        "HTML5",
      ],
      description:
        "E-commerce de tênis que permite buscar e filtrar produtos, adicioná-los aos favoritos e ao carrinho.",
      deployLink: "https://ecommerce-react-tau.vercel.app/",
      repositoryLink:
        "https://github.com/Paulo-Henrique-Santana/ecommerce-react",
    },
    {
      src: pokedex,
      name: "Pokedex",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      description:
        "Aplicação desenvolvida consumindo a PokeAPI, lista os pokemons e permite buscá-los.",
      deployLink: "https://pokedex-react-phi-three.vercel.app/",
      repositoryLink: "https://github.com/Paulo-Henrique-Santana/pokedex-react",
    },
  ];

  return (
    <SectionBackground id="projects">
      <Container>
        <SectionTitle>Projetos</SectionTitle>
        <S.Projects>
          {projects.map((project, index) => (
            <S.Project key={index}>
              <S.Image src={project.src} alt={project.name} />
              <S.About>
                <S.BoxNameAndTechnologies>
                  <S.Name>{project.name}</S.Name>
                  <S.Technologies>
                    {project.technologies.map((tech, index) => (
                      <S.Technology key={index}>
                        {
                          (technologiesIcons as Record<string, JSX.Element>)[
                            tech
                          ]
                        }
                      </S.Technology>
                    ))}
                  </S.Technologies>
                </S.BoxNameAndTechnologies>
                <S.Description>{project.description}</S.Description>
                <S.Links>
                  <S.Link href={project.deployLink} target="_blank">
                    Projeto
                  </S.Link>
                  <S.Link href={project.repositoryLink} target="_blank">
                    Repositório
                  </S.Link>
                </S.Links>
              </S.About>
            </S.Project>
          ))}
        </S.Projects>
      </Container>
    </SectionBackground>
  );
};

export default Projects;
