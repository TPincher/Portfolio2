import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  const navLinkClasses = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : `${styles.link}`;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.leftSection}>
        <section className={styles.personalSection}>
          <h3 className={styles.personalText}>THOMAS PINCHER</h3>
          <p className={styles.personalText}>Junior full-stack developer</p>
        </section>
        <section className={styles.pageLinkSection}>
          <NavLink className={navLinkClasses} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkClasses} to="/about">
            About
          </NavLink>
          <NavLink className={navLinkClasses} to="/projects">
            Projects
          </NavLink>
          <NavLink className={navLinkClasses} to="/stack">
            Stack
          </NavLink>
          <NavLink className={navLinkClasses} to="/contact">
            Contact
          </NavLink>
        </section>
      </div>
      <div className={styles.rightSection}>
        <section className={styles.externalLinkSection}>
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a href="https://github.com/TPincher" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-pincher-4687361a1/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <NavLink className={navLinkClasses} to="/contact">
              <MdEmail />
            </NavLink>
          </IconContext.Provider>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
