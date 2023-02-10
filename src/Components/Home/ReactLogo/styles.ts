import styled, { keyframes } from "styled-components";

const teste = keyframes`
  0% {
    transform: rotate(360deg);
    opacity: 0.7;
  }
  25% {
    opacity: 0.2;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.7;
  }
`;

export const ReactLogoContainer = styled.div`
  position: absolute;
  right: 0;
  width: 540px;
  height: 210px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  animation: ${teste} 10s linear infinite;
  @media (max-width: 1024px) {
    right: -300px;
  }
  @media (max-width: 800px) {
    right: -240px;
    width: 420px;
    height: 160px;
  }
`;

export const ReactLogoBall = styled.div`
  grid-column: 1 /-1;
  grid-row: 1 /-1;
  justify-self: center;
  align-self: center;
  border-radius: 50%;
  width: 85px;
  height: 85px;
  background-color: ${(props) => props.theme.colors.secundary};
  @media (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
`;

export const ReactLogoRing = styled.div`
  grid-column: 1 /-1;
  grid-row: 1 /-1;
  justify-self: center;
  align-self: center;
  border: 20px solid ${(props) => props.theme.colors.secundary};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  &:nth-of-type(2) {
    transform: rotate(60deg);
  }
  &:last-of-type {
    transform: rotate(120deg);
  }
  @media (max-width: 800px) {
    border-width: 15px;
  }
`;
