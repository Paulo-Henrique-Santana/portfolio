import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2.3rem;
  color: ${(props) => props.theme.colors.text1};
  @media (max-width: 800px) {
    font-size: 1.9rem;
  }
`;
