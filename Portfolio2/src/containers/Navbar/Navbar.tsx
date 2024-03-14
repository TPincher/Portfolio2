import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const navLinkClasses = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : `${styles.link}`;
  };

  return (
    <nav className={styles.nav}>
      <p>THOMAS PINCHER</p>
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
    </nav>
  );
};

export default Navbar;
