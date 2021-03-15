import React, { Component } from "react";
import styles from "./navbar.module.scss";
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
  handleSpanishClick: () => void;
  handleEnglishClick: () => void;
  enableAnimateAbout: () => void;
  enableAnimateExperience: () => void;
}

interface INavbarState {
  hasPassedHero: boolean;
  orientation: string;
}

class Navbar extends Component<INavigationProps, INavbarState> {
  getScreenOrientation = () => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return "portrait";
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      return "landscape";
    }

    return "";
  };

  public state: INavbarState = {
    hasPassedHero: false,
    orientation: this.getScreenOrientation(),
  };

  private logoClick = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.logoClick);
      window.scrollTo(0, c - c / 8);
    }
  };

  private setScreenOrientation = () => {
    setTimeout(() => {
      this.setState({ orientation: this.getScreenOrientation() });
    }, 300);
  };

  private listenToScroll = (event: any) => {
    const { orientation } = this.state;
    const heroLimit =
      this.props.viewportWidth > 767
        ? 160
        : orientation === "landscape"
        ? 1
        : 80;

    if (window.scrollY > heroLimit) {
      if (!this.state.hasPassedHero) {
        this.setState({ hasPassedHero: true });
      }
    } else {
      if (this.state.hasPassedHero) {
        this.setState({ hasPassedHero: false });
      }
    }

    if (!this.props.animateAbout) {
      if (window.scrollY >= 300) {
        this.props.enableAnimateAbout();
      }
    }

    const experienceLocation = this.props.viewportWidth > 767 ? 2210 : 2300;

    if (!this.props.animateExperience) {
      if (window.scrollY >= experienceLocation) {
        this.props.enableAnimateExperience();
      }
    }
  };

  public componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    this.setScreenOrientation();
    window.addEventListener("orientationchange", this.setScreenOrientation);
  }
  public componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
    window.removeEventListener("orientationchange", this.setScreenOrientation);
  }
  public render() {
    const { hasPassedHero } = this.state;
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
                <div className={styles.text}>
                  davidvargash.1991@tutanota.com
                </div>
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
            <div className={styles.logo} onClick={this.logoClick}>
              David Vargas
            </div>
            <div className={cx("flex-center", styles.navigation)}>
              <div
                className={styles.link}
                onClick={this.props.handleAboutClick}
              >
                {this.props.strings.aboutMeTitle}
              </div>
              <div
                className={styles.link}
                onClick={this.props.handlePortfolioClick}
              >
                {this.props.strings.portfolioTitle}
              </div>
              <div
                className={styles.link}
                onClick={this.props.handleExperienceClick}
              >
                {this.props.strings.experienceTitle}
              </div>
            </div>
            <div className={cx("flex-center", styles.language)}>
              <img
                className={cx(styles.icon, styles.flag)}
                src={en}
                alt="en"
                title="English"
                onClick={this.props.handleEnglishClick}
              />
              <img
                className={cx(styles.icon, styles.flag)}
                src={es}
                alt="es"
                title="Español"
                onClick={this.props.handleSpanishClick}
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
