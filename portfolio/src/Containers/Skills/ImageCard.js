import Cloud from "../../components/assets/Cloud & Infrastructure Automation.jpg";
import FullStack from "../../components/assets/Full-Stack-Developer.jpg";
import MLandDL from "../../components/assets/Machine Learning & Deep Learning.jpg";
import classes from "./ImageCard.module.css";

const images = (img) => {
  if (img === "Cloud") {
    return Cloud;
  } else if (img === "FullStack") {
    return FullStack;
  } else if (img === "ML&DL") {
    return MLandDL;
  }
};

const ImageCard = (props) => {
  return (
    <div className={classes.box}>
      <img
        className={classes.image}
        src={images(props.title)}
        alt={props.title}
      />
    </div>
  );
};

export default ImageCard;
