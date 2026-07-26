import { DiSass } from "react-icons/di";
import { FaAngular, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiSequelize,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

interface TechnologiesIcons {
  [key: string]: unknown;
}

const technologiesIcons = {
  ["NestJS"]: (
    <SiNestjs
      style={{
        color: "#e0234e",
      }}
    />
  ),
  ["SQL Server"]: (
    <SiMicrosoftsqlserver
      style={{
        color: "#cc2927",
      }}
    />
  ),
  ["PostgreSQL"]: (
    <SiPostgresql
      style={{
        color: "#4169e1",
      }}
    />
  ),
  ["Docker"]: (
    <SiDocker
      style={{
        color: "#2496ed",
      }}
    />
  ),
  ["Sequelize"]: (
    <SiSequelize
      style={{
        color: "#52b0e7",
      }}
    />
  ),
  ["Express"]: (
    <SiExpress
      style={{
        color: "#fdfdfd",
      }}
    />
  ),
  ["Node"]: (
    <FaNodeJs
      style={{
        color: "#57a646",
      }}
    />
  ),
  ["Angular"]: (
    <FaAngular
      style={{
        color: "#c3002f",
      }}
    />
  ),
  ["Styled-Components"]: (
    <SiStyledcomponents
      style={{
        color: "#db7093",
      }}
    />
  ),
  ["React"]: (
    <SiReact
      style={{
        color: "#5ed3f3",
      }}
    />
  ),
  ["TypeScript"]: (
    <SiTypescript
      style={{
        color: "#0076c6",
      }}
    />
  ),
  ["JavaScript"]: (
    <SiJavascript
      style={{
        color: "#efd81d",
      }}
    />
  ),
  ["SASS"]: (
    <DiSass
      style={{
        color: "#c76494",
      }}
    />
  ),
  ["CSS3"]: (
    <SiCss3
      style={{
        color: "#2862e9",
      }}
    />
  ),
  ["HTML5"]: (
    <SiHtml5
      style={{
        color: "#e96228",
      }}
    />
  ),
  ["Git"]: (
    <SiGit
      style={{
        color: "#e84d31",
      }}
    />
  ),
};

export default technologiesIcons;
