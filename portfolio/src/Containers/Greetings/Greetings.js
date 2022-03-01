import ParagraphTexts from "../../components/Titles/ParagraphTexts";
import { greeting } from "../../Content";
import Image from "../../components/assets/01.jpeg";
import SocialMedia from "../SocialMedia/SocialMedia";
import Container from "../../components/Container";

import "./Greetings.css";

const Greetings = () => {
  return (
    <Container>
      <div className="Intro-wrapper">
        <div className="introduction">
          <h1>{greeting.title}</h1>
          <ParagraphTexts className={"info"}>{greeting.summary}</ParagraphTexts>
          <SocialMedia />
        </div>
        <img className="image" src={Image} alt="Dhruv_Image" />
      </div>
    </Container>
  );
};

export default Greetings;
