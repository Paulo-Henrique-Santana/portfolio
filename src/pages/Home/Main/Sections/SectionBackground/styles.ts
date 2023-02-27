import styled from "styled-components";

export const SectionBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  &:nth-child(n + 3) {
    margin-top: 10rem;
  }
  &:nth-last-child(1) {
    margin-bottom: 4rem;
  }
`;
