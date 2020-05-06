import React, { Component } from "react";
import styles from "./navbar.module.scss";
import cx from "classnames";
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

interface INavbarState {
  hasPassedHero: boolean;
  viewportWidth: number;
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
    viewportWidth: window.innerWidth,
    orientation: this.getScreenOrientation(),
  };

  public updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
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
    }, 200);
  };

  private listenToScroll = (event: any) => {
    const { orientation } = this.state;
    const heroLimit =
      this.state.viewportWidth > 767
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
  };

  public componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("orientationchange", this.setScreenOrientation);
  }
  public componentWillMount() {
    this.updateWindowDimensions();
    this.setScreenOrientation();
  }
  public componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("orientationchange", this.setScreenOrientation);
  }
  public render() {
    const { hasPassedHero } = this.state;
    return (
      <nav className={cx(styles.navbar, hasPassedHero ? styles.shadow : "")}>
        <div className={cx(styles.upper, hasPassedHero ? styles.color : "")}>
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
                <div
                  className={cx(styles.link, hasPassedHero ? styles.blue : "")}
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
                  className={cx(styles.link, hasPassedHero ? styles.blue : "")}
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
            <div className={styles.navigation}>
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
            <div className={styles.language}>
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
