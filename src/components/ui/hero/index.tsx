import React, { Component } from "react";
import styles from "./hero.module.scss";
import heroSrc from "icons/hero.jpg";
import { ILanguageProps } from "data/strings";
import reactLogo from "icons/react.png";
import netLogo from "icons/net.png";

let simpleParallax: any = null;
if (typeof window !== "undefined") {
  simpleParallax = require("simple-parallax-js");
}

class Hero extends Component<ILanguageProps> {
  private ParallaxObj: any;
  private ImageRef = React.createRef<HTMLImageElement>();
  constructor(props: ILanguageProps) {
    super(props);
    this.ParallaxObj = null;
  }
  private shouldInitParallax = () => {
    return (
      simpleParallax &&
      this.ImageRef &&
      this.ImageRef.current &&
      !this.ParallaxObj
    );
  };
  public componentDidMount() {
    if (this.shouldInitParallax()) {
      setTimeout(() => {
        this.ParallaxObj = new simpleParallax(this.ImageRef.current, {
          scale: 1.2,
          delay: 0.8,
          orientation: "down",
        });
      }, 300);
    }
  }
  public render() {
    const { strings } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.blur} />
          <img
            ref={this.ImageRef}
            src={heroSrc}
            alt="hero"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{strings.heroTitle}</h1>
            <div className={styles.subtitle}>{strings.heroSubtitle}</div>
            <div className={styles.images}>
              <img className={styles.logo} src={reactLogo} alt="react.js" />
              <img className={styles.logo} src={netLogo} alt=".net" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
