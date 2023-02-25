import styled from "styled-components";
import SectionBackground from "../SectionBackground";
import Container from "../../../Container";

export const Background = styled(SectionBackground)``;

export const StyledContainer = styled(Container)``;

export const Skills = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 0.5rem;
`;

export const Skill = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border: 2px solid transparent;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 20%);
  border-radius: 5px;
  padding: 1.5rem 0.75rem;
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.colors.background2};
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: border 0.2s;
  svg {
    font-size: 6rem;
  }
  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }
  @media (max-width: 380px) {
    flex: 1;
    width: 100%;
  }
`;
