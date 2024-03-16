import SliderPane from "../../components/SliderPane/SliderPane";
import styles from "./Selector.module.scss";

interface props {
  image: string;
}

const Selector = (props: props) => {
  return (
    <div>
      <h2>Project Selector</h2>
      <div className={styles.container}>
        <div className={styles.imagePanes}>{props.image}</div>
      </div>
    </div>
  );
};

export default Selector;
