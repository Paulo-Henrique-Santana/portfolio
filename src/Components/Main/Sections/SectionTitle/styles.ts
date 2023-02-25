import styled from "styled-components";

export const SectionTitle = styled.h2`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text1};
  /* &::before {
    content: "<";
    margin-right: 0.2rem;
    color: ${(props) => props.theme.colors.secundary};
  }
  &::after {
    content: "/>";
    margin-left: 0.2rem;
    color: ${(props) => props.theme.colors.secundary};
  } */
  &::after {
    content: ".";
    margin-left: 0.2rem;
    color: ${(props) => props.theme.colors.secundary};
  }
  @media (max-width: 800px) {
    font-size: 1.8rem;
  }
`;
