import SliderPane from "../../components/SliderPane/SliderPane";
import SliderText from "../../components/SliderText/SliderText";
import styles from "./Slider.module.scss";

const Slider = () => {
  return (
    <div>
      <h2>Project Slider</h2>
      <div className={styles.container}>
        <SliderPane />
        <SliderText />
      </div>
    </div>
  );
};

export default Slider;
