import ParagraphTexts from "../../components/Titles/ParagraphTexts";
import classes from "./SkillCard.module.css";

const SkillCard = (props) => {
  return (
    <div className={classes.section}>
      <h1 className={classes.mainTitle}>{props.title}</h1>
      <ParagraphTexts>
        <ul>
          {props.skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ParagraphTexts>
    </div>
  );
};

export default SkillCard;
