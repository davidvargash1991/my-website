import React from "react";
import styles from "./about.module.scss";
import { ILanguageProps } from "data/strings";
import location from "icons/location.svg";
import work from "icons/work.svg";
import world from "icons/world.svg";

export interface ISectionProps extends ILanguageProps {
  ref: React.Ref<HTMLDivElement>;
}

const About: React.FC<ISectionProps> = React.forwardRef(
  (props: ILanguageProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={styles.container}>
        <div ref={ref} className={styles.title}>
          {props.strings.aboutMeTitle}
        </div>
        <p className={styles.text}>{props.strings.textAbout}</p>
        <div className={styles.info}>
          <div className={styles.item}>
            <img className={styles.img} src={work} alt="work" />
            <div className={styles.name}>{props.strings.totalExpTitle}</div>
            <div className={styles.description}>{props.strings.totalExp}</div>
          </div>
          <div className={styles.item}>
            <img className={styles.img} src={world} alt="world" />
            <div className={styles.name}>{props.strings.remoteTitle}</div>
            <div className={styles.description}>{props.strings.remoteText}</div>
          </div>
          <div className={styles.item}>
            <img className={styles.img} src={location} alt="location" />
            <div className={styles.name}>{props.strings.locationTitle}</div>
            <div className={styles.description}>
              {props.strings.locationText}
            </div>
            <div className={styles.description}>UTC -05:00</div>
          </div>
        </div>
      </div>
    );
  }
);

export default About;
