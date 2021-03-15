import React, { Component } from "react";
import { ILanguageProps } from "data/strings";
import Navbar from "components/ui/navbar";
import Hero from "components/ui/hero";
import About from "components/ui/about";
import Portfolio from "components/ui/portfolio";
import Technologies from "components/ui/technologies";
import Experience from "components/ui/experience";
import Footer from "components/ui/footer";

const NAV_HEIGHT = 100;

interface IHomeProps extends ILanguageProps {
  handleSpanishClick: () => void;
  handleEnglishClick: () => void;
}

interface IHomeState {
  viewportWidth: number;
  animateAbout: boolean;
  animateExperience: boolean;
}

class Home extends Component<IHomeProps, IHomeState> {
  state = {
    viewportWidth: window.innerWidth,
    animateAbout: false,
    animateExperience: false,
  };

  private aboutRef = React.createRef<HTMLHeadElement>();
  private portfolioRef = React.createRef<HTMLDivElement>();
  private experienceRef = React.createRef<HTMLDivElement>();

  private updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
  };

  private handleAboutClick = () => {
    if (this.aboutRef.current) {
      window.scrollTo({
        top: this.aboutRef.current.offsetTop - NAV_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  private handlePortfolioClick = () => {
    if (this.portfolioRef.current) {
      window.scrollTo({
        top: this.portfolioRef.current.offsetTop - NAV_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  private handleExperienceClick = () => {
    if (this.experienceRef.current) {
      window.scrollTo({
        top: this.experienceRef.current.offsetTop - NAV_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  public enableAnimateAbout = () => {
    this.setState({ animateAbout: true });
  };

  public enableAnimateExp = () => {
    this.setState({ animateExperience: true });
  };

  public componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  public render() {
    const { strings, handleSpanishClick, handleEnglishClick } = this.props;
    return (
      <React.Fragment>
        <Navbar
          strings={strings}
          viewportWidth={this.state.viewportWidth}
          animateAbout={this.state.animateAbout}
          animateExperience={this.state.animateExperience}
          handleAboutClick={this.handleAboutClick}
          handlePortfolioClick={this.handlePortfolioClick}
          handleExperienceClick={this.handleExperienceClick}
          handleSpanishClick={handleSpanishClick}
          handleEnglishClick={handleEnglishClick}
          enableAnimateAbout={this.enableAnimateAbout}
          enableAnimateExperience={this.enableAnimateExp}
        />
        <Hero strings={strings} />
        <About
          ref={this.aboutRef}
          strings={strings}
          animate={this.state.animateAbout}
        />
        <Portfolio
          ref={this.portfolioRef}
          strings={strings}
          viewportWidth={this.state.viewportWidth}
        />
        <Technologies strings={strings} />
        <Experience
          ref={this.experienceRef}
          strings={strings}
          animate={this.state.animateExperience}
        />
        <Footer strings={strings} />
      </React.Fragment>
    );
  }
}

export default Home;
