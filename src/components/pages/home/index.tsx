import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { strings } from "data/strings";
import Navbar from "components/ui/navbar";
import Hero from "components/ui/hero";
import About from "components/ui/about";
import Portfolio from "components/ui/portfolio";
import Technologies from "components/ui/technologies";
import Experience from "components/ui/experience";
import Footer from "components/ui/footer";

const NAV_HEIGHT = 100;

const Home: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [animateAbout, setAnimateAbout] = useState(false);
  const [animateExperience, setAnimateExperience] = useState(false);

  const aboutRef = useRef<HTMLHeadElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const updateWindowDimensions = () => {
    setViewportWidth(window.innerWidth);
  };

  const handleAboutClick = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop - NAV_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  const handlePortfolioClick = () => {
    if (portfolioRef.current) {
      window.scrollTo({
        top: portfolioRef.current.offsetTop - NAV_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  const handleExperienceClick = () => {
    if (experienceRef.current) {
      window.scrollTo({
        top: experienceRef.current.offsetTop - NAV_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  const enableAnimateAbout = () => {
    setAnimateAbout(true);
  };

  const enableAnimateExp = () => {
    setAnimateExperience(true);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang");
  const currentStrings = lang === "es" ? strings.spanish : strings.english;

  return (
    <React.Fragment>
      <Navbar
        strings={currentStrings}
        viewportWidth={viewportWidth}
        animateAbout={animateAbout}
        animateExperience={animateExperience}
        handleAboutClick={handleAboutClick}
        handlePortfolioClick={handlePortfolioClick}
        handleExperienceClick={handleExperienceClick}
        enableAnimateAbout={enableAnimateAbout}
        enableAnimateExperience={enableAnimateExp}
      />
      <Hero strings={currentStrings} />
      <About ref={aboutRef} strings={currentStrings} animate={animateAbout} />
      <Portfolio
        ref={portfolioRef}
        strings={currentStrings}
        viewportWidth={viewportWidth}
      />
      <Technologies strings={currentStrings} />
      <Experience
        ref={experienceRef}
        strings={currentStrings}
        animate={animateExperience}
      />
      <Footer strings={currentStrings} />
    </React.Fragment>
  );
};

export default Home;
