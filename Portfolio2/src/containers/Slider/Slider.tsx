import SliderPane from "../../components/SliderPane/SliderPane";
import SliderText from "../../components/SliderText/SliderText";
import styles from "./Slider.module.scss";
import { Project } from "../../assets/Projects";

const Slider = (props: Project) => {
  return (
    <div>
      <h2>Project Slider</h2>
      <div className={styles.container}>
        <SliderPane />
        <SliderText
          title={props.title}
          details={props.details}
          features={props.features}
          stack={props.stack}
          link={props.link}
        />
      </div>
    </div>
  );
};

export default Slider;
