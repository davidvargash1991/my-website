import React from "react";
import styles from "./navbar.module.scss";
import logo from "icons/logo.png";
import mail from "icons/mail.svg";
import linkedin from "icons/linkedin.svg";
import github from "icons/github.svg";
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
              <img className={styles.icon} alt="linkedin" src={linkedin} />
            </a>
            <a
              href="https://github.com/davidvargash1991"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.icon} alt="github" src={github} />
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
              className={styles.icon}
              src={en}
              alt="en"
              title="English"
              onClick={props.handleEnglishClick}
            />
            <img
              className={styles.icon}
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
