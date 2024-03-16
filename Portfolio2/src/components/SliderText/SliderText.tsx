import { getProjects } from "../../assets/Projects";
import styles from "./SliderText.module.scss";
import { Project } from "../../assets/Projects";

console.log(getProjects());

const SliderText = (props: Project) => {
  return (
    <div className={styles.sliderText}>
      <p>{props.title}</p>
      <p>{props.details}</p>
      <p>{props.features}</p>
      <p>{props.stack}</p>
      <p>{props.link}</p>
    </div>
  );
};

export default SliderText;
