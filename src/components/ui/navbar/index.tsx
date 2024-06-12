import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import { useSearchParams } from "react-router-dom";
import cx from "classnames";
import Mail from "components/ui/icons/mail";
import Linkedin from "components/ui/icons/linkedin";
import Github from "components/ui/icons/github";
import es from "icons/es.svg";
import en from "icons/en.svg";
import { ILanguageProps } from "data/strings";

export interface INavigationProps extends ILanguageProps {
  viewportWidth: number;
  animateAbout: boolean;
  animateExperience: boolean;
  handleAboutClick: () => void;
  handlePortfolioClick: () => void;
  handleExperienceClick: () => void;
  enableAnimateAbout: () => void;
  enableAnimateExperience: () => void;
}

interface INavbarState {
  hasPassedHero: boolean;
  orientation: string;
}

const Navbar: React.FC<INavigationProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getScreenOrientation = () => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return "portrait";
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      return "landscape";
    }

    return "";
  };

  const [hasPassedHero, setHasPassedHero] = useState(false);
  const [orientation, setOrientation] = useState(getScreenOrientation());

  const logoClick = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(logoClick);
      window.scrollTo(0, c - c / 8);
    }
  };

  const setScreenOrientation = () => {
    setTimeout(() => {
      setOrientation(getScreenOrientation());
    }, 300);
  };

  const listenToScroll = (event: any) => {
    const heroLimit =
      props.viewportWidth > 767 ? 160 : orientation === "landscape" ? 1 : 80;

    if (window.scrollY > heroLimit) {
      if (!hasPassedHero) {
        setHasPassedHero(true);
      }
    } else {
      if (hasPassedHero) {
        setHasPassedHero(false);
      }
    }

    if (!props.animateAbout) {
      if (window.scrollY >= 300) {
        props.enableAnimateAbout();
      }
    }

    const experienceLocation = props.viewportWidth > 767 ? 2210 : 2300;

    if (!props.animateExperience) {
      if (window.scrollY >= experienceLocation) {
        props.enableAnimateExperience();
      }
    }
  };

  const handleEnglishClick = () => {
    setSearchParams({ lang: "en" });
  };

  const handleSpanishClick = () => {
    setSearchParams({ lang: "es" });
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    setScreenOrientation();
    window.addEventListener("orientationchange", setScreenOrientation);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
      window.removeEventListener("orientationchange", setScreenOrientation);
    };
  }, []);

  return (
    <nav className={cx(styles.navbar, hasPassedHero ? styles.shadow : "")}>
      <div
        className={cx(
          styles.upper,
          styles.upperContent,
          hasPassedHero ? styles.color : ""
        )}
      >
        <div className={cx(styles.content, styles.upperContent)}>
          <div>
            <a
              className={styles.mail}
              href="mailto:davidvargash.1991@tutanota.com"
            >
              <div className={styles.icon}>
                <Mail />
              </div>
              <div className={styles.text}>davidvargash.1991@tutanota.com</div>
            </a>
          </div>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/david-vargas-8aa700137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={cx(
                  "flex-center",
                  styles.sociallink,
                  hasPassedHero ? styles.blue : ""
                )}
              >
                <Linkedin color="#ffffff" />
              </div>
            </a>
            <a
              href="https://github.com/davidvargash1991"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={cx(
                  "flex-center",
                  styles.sociallink,
                  hasPassedHero ? styles.blue : ""
                )}
              >
                <Github color="#ffffff" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.content}>
          <div className={styles.logo} onClick={logoClick}>
            David Vargas
          </div>
          <div className={cx("flex-center", styles.navigation)}>
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
          <div className={cx("flex-center", styles.language)}>
            <img
              className={cx(styles.icon, styles.flag)}
              src={en}
              alt="en"
              title="English"
              onClick={handleEnglishClick}
            />
            <img
              className={cx(styles.icon, styles.flag)}
              src={es}
              alt="es"
              title="Español"
              onClick={handleSpanishClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
