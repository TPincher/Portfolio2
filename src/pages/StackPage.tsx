import { IconContext } from "react-icons";
import styles from "./PageStyles.module.scss";
import { TiCss3, TiHtml5 } from "react-icons/ti";
import {
  FaReact,
  FaDatabase,
  FaJava,
  FaPython,
  FaAws,
  FaSass,
} from "react-icons/fa";
import { FaSquareGit } from "react-icons/fa6";
import { TbBrandAzure } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";

const StackPage = () => {
  return (
    <main>
      <section className={styles.allPages}>
        <div className={styles.StackPage}>
          <article className={styles.stackText}>
            <h2 className={styles.aboutDividedTitle}>Current Stack</h2>
            <p>
              I have a solid grasp of the basics - HTML, CSS, SQL, and
              JavaScript - while also having some project experience with React
              and Python
            </p>
            <p className={styles.iconStyles}>
              <IconContext.Provider value={{ color: "#096b90", size: "4em" }}>
                <TiHtml5 />
                <TiCss3 />
                <FaSass />
                <RiJavascriptFill />
                <FaSquareGit />
                <FaReact />
                <FaDatabase />
                <FaPython />
              </IconContext.Provider>
            </p>
          </article>
          <article className={styles.stackText}>
            <h2 className={styles.aboutDividedTitle}>Now Studying</h2>
            <p>
              While I already have projects that utilize TypeScript and Java,
              all my current work is based on praciticing these two languages
            </p>
            <p className={styles.iconStyles}>
              <IconContext.Provider value={{ color: "#096b90", size: "4em" }}>
                <BiLogoTypescript />
                <FaJava />
              </IconContext.Provider>
            </p>
          </article>
          <article className={styles.stackText}>
            <h2 className={styles.aboutDividedTitle}>On the radar</h2>
            <p>
              _nology graduates are lucky enough to get access to AWS and
              Microsoft certifications, which I am currently working through
            </p>
            <p className={styles.iconStyles}>
              <IconContext.Provider value={{ color: "#096b90", size: "4em" }}>
                <FaAws />
                <TbBrandAzure />
              </IconContext.Provider>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default StackPage;
