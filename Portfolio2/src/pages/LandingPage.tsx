import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";
import tomPhoto from "../assets/TomPhoto.jpg";

const LandingPage = () => {
  return (
    <main className={styles.allPages}>
      <section className={styles.homePage}>
        <div className={styles.homePageLeft}>
          <Title
            title={"Thomas Pincher"}
            subtitle={"Junior full-stack developer"}
          />
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
