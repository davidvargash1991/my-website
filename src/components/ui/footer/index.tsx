import React from "react";
import styles from "./footer.module.scss";
import linkedin from "icons/linkedin.svg";
import github from "icons/github.svg";
import { INavigationProps } from "../navbar";

const Footer: React.FC<INavigationProps> = (props) => {
  const logoClick = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(logoClick);
      window.scrollTo(0, c - c / 8);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title} onClick={logoClick}>
          David Vargas
        </div>
        <div className={styles.text}>Full Stack Developer</div>
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
      </div>
    </div>
  );
};

export default Footer;
