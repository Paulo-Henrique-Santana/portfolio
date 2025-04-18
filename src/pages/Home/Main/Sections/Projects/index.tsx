import { HiLink } from "react-icons/hi";
import Container from "../../../../../Components/Container";
import clima from "../../../../../images/clima.png";
import reactshoes from "../../../../../images/reactshoes.png";
import testeTeddy from "../../../../../images/teste-teddy.png";
import technologiesIcons from "../../../../../utilities/technologiesIcons";
import SectionBackground from "../SectionBackground";
import SectionTitle from "../SectionTitle";
import * as S from "./styles";

const Projects = () => {
  const projects = [
    {
      src: testeTeddy,
      name: "Teste Teddy",
      technologies: ["Angular", "TypeScript", "SASS", "Node", "Express", "Sequelize"],
      description:
        "Projeto desenvolvido como parte de um teste técnico para uma vaga, consistindo na criação do front-end e da API para um CRUD de clientes, e com a funcionalidade de seleção de clientes.",
      repositoryLink: "https://github.com/Paulo-Henrique-Santana/teste-teddy-front-end",
    },
    {
      src: clima,
      name: "Clima",
      technologies: ["React", "TypeScript", "SASS"],
      description:
        "Aplicação desenvolvida consumindo a OpenWeather API, que retorna detalhes sobre o clima atual da cidade pesquisada.",
      deployLink: "https://climaatual.vercel.app/",
      repositoryLink: "https://github.com/Paulo-Henrique-Santana/clima",
    },
    {
      src: reactshoes,
      name: "ReactShoes",
      technologies: ["React", "JavaScript", "Styled-Components"],
      description:
        "E-commerce de tênis que permite buscar e filtrar produtos, adicioná-los aos favoritos e ao carrinho.",
      deployLink: "https://ecommerce-react-tau.vercel.app/",
      repositoryLink:
        "https://github.com/Paulo-Henrique-Santana/ecommerce-react",
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
                  {project.deployLink && (
                    <S.Link href={project.deployLink} target="_blank">
                      <HiLink />
                      Projeto
                    </S.Link>
                  )}
                  <S.Link href={project.repositoryLink} target="_blank">
                    <HiLink />
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
