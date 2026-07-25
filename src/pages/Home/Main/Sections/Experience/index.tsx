import SectionTitle from "../SectionTitle";
import * as S from "./styles";

const experiences = [
  {
    company: "NewTech",
    role: "Desenvolvedor Full Stack",
    period: "05/2023 – Até o momento",
    responsibilities: [
      "Desenvolvimento de interfaces modernas, responsivas e componentes reutilizáveis no front-end utilizando Angular, TypeScript e SASS, com utilização de bibliotecas de UI e design systems para padronização, escalabilidade e consistência visual, garantindo boa usabilidade e performance.",
      "Criação e manutenção de serviços e APIs no back-end com Node.js, NestJS, TypeScript e Express, utilizando ORMs e bancos de dados SQL Server e PostgreSQL para soluções escaláveis e eficientes.",
      "Integração de APIs RESTful com sistemas internos e externos.",
      "Automatização de deploys com Docker e GitHub Actions, garantindo maior confiabilidade e agilidade nas entregas.",
      "Escrita de testes unitários e integração contínua, assegurando qualidade e cobertura do código.",
    ],
  },
];

const Experience = () => {
  return (
    <S.Experience id="experience">
      <S.StyledContainer>
        <SectionTitle>Experiência</SectionTitle>
        <S.Timeline>
          {experiences.map((experience) => (
            <S.Item key={experience.company}>
              <S.Header>
                <S.Company>{experience.company}</S.Company>
                <S.Role>{experience.role}</S.Role>
                <S.Period>{experience.period}</S.Period>
              </S.Header>
              <S.Responsibilities>
                {experience.responsibilities.map((responsibility) => (
                  <S.Responsibility key={responsibility}>
                    {responsibility}
                  </S.Responsibility>
                ))}
              </S.Responsibilities>
            </S.Item>
          ))}
        </S.Timeline>
      </S.StyledContainer>
    </S.Experience>
  );
};

export default Experience;
