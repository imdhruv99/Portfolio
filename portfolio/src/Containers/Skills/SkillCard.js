import classes from "./SkillCard.module.css";

const SkillCard = (props) => {
  return (
    <div className={classes.section}>
      <h1 className={classes.mainTitle}>{props.title}</h1>

      <ul>
        {props.skills.map((item) => (
          <li className={classes.listItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
