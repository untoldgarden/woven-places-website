import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Navigation.module.css';
import data from '../data/navigation.json';

const Navigation = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.buttonsWrapper}>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} activeClassName={styles.active} to="/" exact>
                {data.home[language]}
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} activeClassName={styles.active} to="/konstnarer">
                {data.artists[language]}
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} activeClassName={styles.active} to="/vardar">
                {data.hosts[language]}
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} activeClassName={styles.active} to="/om">
                {data.about[language]}
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <button 
                className={`${styles.navLink} ${styles.languageButton}`} 
                onClick={() => handleLanguageChange(language === 'en' ? 'sv' : 'en')}
              >
                {language === 'en' ? 'Svenska' : 'English'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
