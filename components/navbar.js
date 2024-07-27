import { useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <a
          role="button"
          className={`${styles.navbarBurger} ${
            isActive ? styles.isActive : ""
          }`}
          aria-label="menu"
          aria-expanded="false"
          onClick={handleToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        className={`${styles.navbarMenu} ${isActive ? styles.isActive : ""}`}
      >
        <div className={styles.navbarEnd}>
          <a href="#projects" className={styles.navbarItem}>
            Projects
          </a>
          <a href="#profile" className={styles.navbarItem}>
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}
