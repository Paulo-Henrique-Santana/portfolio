import styled from "styled-components";

export const SocialMedia = styled.ul`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
  width: 100vw;

  svg {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.text2};
    transition: color 0.3s;
  }

  li:hover svg {
    color: ${(props) => props.theme.colors.text1};
  }
`;
