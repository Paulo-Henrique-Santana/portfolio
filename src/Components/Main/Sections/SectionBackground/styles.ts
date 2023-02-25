import styled from "styled-components";

export const SectionBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  &:nth-child(n + 2) {
    margin-bottom: 10rem;
  }
`;
