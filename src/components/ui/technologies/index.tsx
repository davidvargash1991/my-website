import React, { Component } from "react";
import styles from "./tech.module.scss";
import code from "icons/code.jpg";
import { ILanguageProps } from "data/strings";

let simpleParallax: any = null;
if (typeof window !== "undefined") {
  simpleParallax = require("simple-parallax-js");
}

class Technologies extends Component<ILanguageProps> {
  private ParallaxObj: any;
  private ImageRef = React.createRef<HTMLImageElement>();
  constructor(props: any) {
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
          scale: 1.5,
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
        <div className={styles.blur}>
          <div className={styles.textContainer}>
            <div className={styles.title}>Technologies</div>
            <div className={styles.text}>
              {`${strings.techText} React.js, Redux, Typescript, SASS, .Net, Entity
              Framework, SQL Server`}
            </div>
          </div>
        </div>
        <img
          className={styles.image}
          ref={this.ImageRef}
          src={code}
          alt="code"
        />
      </div>
    );
  }
}

export default Technologies;
