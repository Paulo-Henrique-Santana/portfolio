import styled from "styled-components";
import Container from "../../../../../Components/Container";
import * as BS from "react-icons/bs";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const FieldBox = styled.div`
  margin-bottom: 1.5rem;
  textarea,
  input {
    box-shadow: 0px 0px 5px rgb(0 0 0 / 20%);
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.text2};
    border-radius: 4px;
    padding: 0.4rem;
    width: 100%;
    font-size: 1.1rem;
    background-color: ${(props) => props.theme.colors.background2};
    color: ${(props) => props.theme.colors.text2};
  }
  textarea:focus,
  input:focus {
    border-color: ${(props) => props.theme.colors.secundary};
  }
`;

export const Label = styled.label`
  position: relative;
  display: block;
  margin-bottom: 0.8rem;
  font-size: 1.15rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text1};
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 23px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.secundary};
  }
`;

export const TextArea = styled.textarea`
  resize: none;
`;

export const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0;
  width: 100%;
  max-width: 150px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background1};
  font-size: 1.15rem;
  font-weight: bold;
  cursor: pointer;
  transition: filter 0.4s;
  svg {
    font-size: 1.3rem;
  }
  &:hover {
    filter: brightness(115%);
  }
`;

export const Contacts = styled.div`
  grid-area: contacts;
`;

export const Contact = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 20%);
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  background-color: ${(props) => props.theme.colors.background2};
  transition: border 0.3s;
  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }
  svg {
    font-size: 1.9rem;
  }
  span {
    font-size: 0.95rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text2};
  }
  @media (max-width: 350px) {
    padding: 0.6rem 0.7rem;
    gap: 0.6rem;
    svg {
      font-size: 1.5rem;
    }
    span {
      font-size: 0.85rem;
    }
  }
`;

export const WhatsappIcon = styled(BS.BsWhatsapp)`
  color: #0dc143;
`;

export const EmailIcon = styled(BS.BsEnvelope)`
  color: #edc707;
`;

export const LinkedinIcon = styled(BS.BsLinkedin)`
  color: #0a65c1;
`;

export const GithubIcon = styled(BS.BsGithub)`
  color: ${(props) => props.theme.colors.primary};
`;
