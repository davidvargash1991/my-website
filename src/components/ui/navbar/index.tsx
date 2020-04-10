import React from "react";
import styles from "./navbar.module.scss";
import cx from "classnames";
import logo from "icons/logo.png";
import mail from "icons/mail.svg";
import Linkedin from "components/ui/icons/linkedin";
import Github from "components/ui/icons/github";
import es from "icons/es.svg";
import en from "icons/en.svg";
import { ILanguageProps } from "data/strings";

export interface INavigationProps extends ILanguageProps {
  handleAboutClick: () => void;
  handlePortfolioClick: () => void;
  handleExperienceClick: () => void;
  handleSpanishClick: () => void;
  handleEnglishClick: () => void;
}

const Navbar: React.FC<INavigationProps> = (props) => {
  const logoClick = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(logoClick);
      window.scrollTo(0, c - c / 8);
    }
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.upper}>
        <div className={styles.content}>
          <div>
            <a
              className={styles.mail}
              href="mailto:davidvargash.1991@tutanota.com"
            >
              <img className={styles.icon} alt="mail" src={mail} />
              <p>davidvargash.1991@tutanota.com</p>
            </a>
          </div>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/david-vargas-8aa700137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.link}>
                <Linkedin color="#ffffff" />
              </div>
            </a>
            <a
              href="https://github.com/davidvargash1991"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.link}>
                <Github color="#ffffff" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.content}>
          <img
            className={styles.logo}
            src={logo}
            alt="logo"
            onClick={logoClick}
          />
          <div className={styles.navigation}>
            <div className={styles.link} onClick={props.handleAboutClick}>
              {props.strings.aboutMeTitle}
            </div>
            <div className={styles.link} onClick={props.handlePortfolioClick}>
              {props.strings.portfolioTitle}
            </div>
            <div className={styles.link} onClick={props.handleExperienceClick}>
              {props.strings.experienceTitle}
            </div>
          </div>
          <div className={styles.language}>
            <img
              className={cx(styles.icon, styles.flag)}
              src={en}
              alt="en"
              title="English"
              onClick={props.handleEnglishClick}
            />
            <img
              className={cx(styles.icon, styles.flag)}
              src={es}
              alt="es"
              title="Español"
              onClick={props.handleSpanishClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
