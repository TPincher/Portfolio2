import getProjects from "../../assets/Projects";
import styles from "./SliderText.module.scss";

console.log(getProjects());

const SliderText = () => {
  return (
    <div className={styles.sliderText}>
      <p>Title</p>
      <p>Details</p>
      <p>Features</p>
      <p>Stack</p>
      <p>Links</p>
    </div>
  );
};

export default SliderText;
