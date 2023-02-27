import styled from "styled-components";
import Container from "../../Components/Container";
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 20%);
  border-radius: 10px;
  padding: 3rem;
  width: auto;
  background-color: ${(props) => props.theme.colors.background2};
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text1};
`;

export const CheckIcon = styled(FaCheck)`
  font-size: 8rem;
  color: ${(props) => props.theme.colors.secundary};
`;

export const Msg = styled.p`
  font-size: 1.05rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text2};
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0;
  width: 100%;
  max-width: 125px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background1};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: filter 0.4s;
  svg {
    font-size: 1.2rem;
  }
  &:hover {
    filter: brightness(115%);
  }
`;
