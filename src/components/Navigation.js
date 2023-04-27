import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.buttonsWrapper}>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} activeClassName={styles.active} to="/" exact>
                Hem
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} activeClassName={styles.active} to="/konstnarer">
                Konstnärer
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} activeClassName={styles.active} to="/vardar">
                Värdar
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} activeClassName={styles.active} to="/om">
                Om
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
