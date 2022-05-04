import ParagraphTexts from "../../components/Titles/ParagraphTexts";
import { greeting } from "../../Content";
import Image from "../../components/assets/01.jpeg";
import SocialMedia from "../SocialMedia/SocialMedia";
import Container from "../../components/Container";

import "./Greetings.css";
import styled from "styled-components";

const Greetings = (props) => {
  const { theme } = props;

  const Title = styled.h1`
    color: ${theme !== "light" && "white"};
  `;

  return (
    <Container theme={theme}>
      <div className="Intro-wrapper">
        <div className="introduction">
          <Title>{greeting.title}</Title>
          <ParagraphTexts id={"info"}>{greeting.summary}</ParagraphTexts>
          <SocialMedia />
        </div>
        <img className="image" src={Image} alt="Dhruv_Image" />
      </div>
    </Container>
  );
};

export default Greetings;
