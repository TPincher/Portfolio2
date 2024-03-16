import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";

const AboutPage = () => {
  return (
    <main className={styles.allPages}>
      <Title
        title={"About me"}
        subtitle={"A little about my journey (so far)"}
      />
      <div className={styles.aboutPage}>
        <h3>The time before tech</h3>
        <p>
          Unsure of what I wanted to do as a career, I'd worked in the FMCG
          industry for nearly two decades, working everything from dishwashing
          to corporate operations management and franchisee consultant roles. I
          was fortunate enough to have a manager at the time who set me up in
          cross-functional teams which is where I got my first tastes of the
          tech World. While I turned down a BA role as I couldn't relocate,
          these experiences got me working with PowerBI, Salesforce, and Excel,
          which in turn led to Python and SQL.
        </p>
        <h3>Further Education</h3>
        <p>
          Before long I found myself as the go-to in the team for anything tech
          related, and I decided it was time to plan a career change - a process
          which took me a little over a year as I finalized my MBA and
          outstanding work projects. During that time, I kept developing my tech
          skills by taking online courses through Udacity, and I recently
          graduated from the entry-level software engineer program with _nology!
        </p>
        <h3>AFK</h3>
        <p>
          Tech and career aspirations aside, I mostly keep myself sane through
          sports, whether it be snowboarding, target-shooting or American
          Football, or travelling abroad.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
