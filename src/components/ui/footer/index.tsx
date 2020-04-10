import React from "react";
import styles from "./footer.module.scss";
import Linkedin from "components/ui/icons/linkedin";
import Github from "components/ui/icons/github";
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
