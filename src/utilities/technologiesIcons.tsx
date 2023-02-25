import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { DiSass } from "react-icons/di";

interface TechnologiesIcons {
  [key: string]: unknown;
}

const technologiesIcons = {
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
