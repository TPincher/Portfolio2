import styles from "./PageStyles.module.scss";
import tomPhoto from "../assets/TomPhoto.jpg";

const LandingPage = () => {
  return (
    <main className={styles.allPages}>
      <section className={styles.homePage}>
        <div className={styles.homePageLeft}>
          <h1 className={styles.landingTitle}>Thomas Pincher</h1>
          <h3>Ex-operations manager</h3>
          <h3>Lifelong tech enthusiast</h3>
          <p>Learning to code, one bit at a time</p>
        </div>
        <div className={styles.homePageRight}>
          <img src={tomPhoto} className={styles.profilePic} />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
