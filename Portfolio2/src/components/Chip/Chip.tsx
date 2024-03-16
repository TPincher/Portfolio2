import styles from "./Chip.module.scss";

interface props {
  content: string;
}

const Chip = (props: props) => {
  return <p className={styles.pill}> {props.content} </p>;
};

export default Chip;
