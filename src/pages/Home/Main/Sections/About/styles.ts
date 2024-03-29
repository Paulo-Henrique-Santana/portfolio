import styled from "styled-components";
import SectionBackground from "../SectionBackground";
import Container from "../../../../../Components/Container";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const About = styled(SectionBackground)``;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftQuote = styled(FaQuoteLeft)`
  margin-right: 8px;
  margin-bottom: 2px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.secundary};
`;

export const RightQuote = styled(FaQuoteRight)`
  margin-left: 8px;
  margin-bottom: 2px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.secundary};
`;

export const TextAbout = styled.p`
  max-width: 1100px;
  color: ${(props) => props.theme.colors.text2};
  font-size: 1.3rem;
  text-align: center;
  line-height: 2rem;
`;
