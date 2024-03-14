import Titlebar from "../Titlebar/Titlebar";
import styles from "./PageContainer.module.scss";

const PageContainer = () => {
  return (
    <section className={styles.container}>
      PageContainer
      <Titlebar />
    </section>
  );
};

export default PageContainer;
