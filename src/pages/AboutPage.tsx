import styles from "./PageStyles.module.scss";

const AboutPage = () => {
  return (
    <main>
      <section className={styles.allPages}>
        <div className={styles.AboutPage}>
          <article className={styles.aboutText}>
            <h2 className={styles.aboutDividedTitle}>The time before tech</h2>
            <p>
              Unsure of what I wanted to do as a career, I'd worked in the FMCG
              industry for nearly two decades, working everything from
              dishwashing to corporate operations management and franchisee
              consultant roles. I was fortunate enough to have a manager at the
              time who set me up in cross-functional teams which is where I got
              my first tastes of the tech World. While I turned down a BA role
              as I couldn't relocate, these experiences got me working with
              PowerBI, Salesforce, and Excel, which in turn led to Python and
              SQL.
            </p>
          </article>
          <article className={styles.aboutText}>
            <h2 className={styles.aboutDividedTitle}>Further Education</h2>
            <p>
              Before long I found myself as the go-to in the team for anything
              tech related, and I decided it was time to plan a career change -
              a process which took me a little over a year as I finalized my MBA
              and outstanding work projects. During that time, I kept developing
              my tech skills by taking online courses through Udacity, and I
              recently graduated from the entry-level software engineer program
              with _nology!
            </p>
          </article>
          <article className={styles.aboutText}>
            <h2 className={styles.aboutDividedTitle}>AFK</h2>
            <p>
              Tech and career aspirations aside, I mostly keep myself sane
              through sports, whether it be snowboarding, target-shooting or
              American Football, or travelling abroad.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
