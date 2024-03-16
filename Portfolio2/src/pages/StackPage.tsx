import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";

const StackPage = () => {
  return (
    <main className={styles.allPages}>
      <Title
        title={"The stack"}
        subtitle={"Here's what I know (and what I'm learning)"}
      />
    </main>
  );
};

export default StackPage;
