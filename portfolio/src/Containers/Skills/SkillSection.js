import { Fragment } from "react";
import ImageCard from "./ImageCard";
import Container from "../../components/Container";
import SkillCard from "./SkillCard";
import classes from "./SkillSection.module.css";
import { skills } from "../../Content";

const SkillSection = () => {
  return (
    <Fragment>
      {skills.map((skill) => (
        <Container key={skill.title}>
          <div className={`${classes.box} ${skill.flag && classes.change}`}>
            <ImageCard flag={skill.flag} title={skill.image} />
            <SkillCard
              title={skill.title}
              skills={skill.skills}
              flag={skill.flag}
            />
          </div>
        </Container>
      ))}
    </Fragment>
  );
};

export default SkillSection;
