import React, { Component } from "react";
import styles from "./hero.module.scss";
import { ILanguageProps } from "data/strings";
import reactLogo from "icons/react.png";
import netLogo from "icons/net.png";
import photo from "icons/photo.jpg";

class Hero extends Component<ILanguageProps> {
  public render() {
    const { strings } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <img className={styles.photo} src={photo} alt="David Vargas" />
            <h1 className={styles.title}>
              David <span>Vargas</span>
            </h1>
            <div className={styles.subtitle}>{strings.heroSubtitle}</div>
            <div className={styles.images}>
              <img className={styles.logo} src={reactLogo} alt="react.js" />
              <img className={styles.logo} src={netLogo} alt=".net" />
            </div>
          </div>
          <div className={styles.photoContainer}>
            <img src={photo} alt="David Vargas" />
          </div>
        </div>
        <div className={styles.wave} />
      </div>
    );
  }
}

export default Hero;
