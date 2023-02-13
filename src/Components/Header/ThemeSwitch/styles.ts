import styled from "styled-components";
import { CiLight, CiDark } from "react-icons/ci";

export const ContainerThemeMode = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DarkModeIcon = styled(CiDark)`
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 325px) {
    display: none;
  }
`;

export const LightModeIcon = styled(CiLight)`
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 325px) {
    display: none;
  }
`;
