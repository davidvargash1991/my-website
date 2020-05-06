import React from "react";
import styles from "./about.module.scss";
import cx from "classnames";
import { ILanguageProps } from "data/strings";
import Location from "components/ui/icons/location";
import work from "icons/work.svg";
import world from "icons/world.svg";
import Subtitle from "components/ui/subtitle";

export interface ISectionProps extends ILanguageProps {
  ref: React.Ref<any>;
}

const About: React.FC<ISectionProps> = React.forwardRef(
  (props: ILanguageProps, ref: React.Ref<any>) => {
    return (
      <div className={cx("container", styles.container)}>
        <Subtitle ref={ref} text={props.strings.aboutMeTitle} />
        {/* <h2 ref={ref} className={styles.title}>
          {props.strings.aboutMeTitle}
        </h2> */}
        <p className={styles.text}>{props.strings.textAbout}</p>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div className={styles.item}>
              <img className={styles.img} src={work} alt="work" />
              <div className={styles.name}>{props.strings.experienceTitle}</div>
              <div className={styles.description}>{props.strings.totalExp}</div>
            </div>
            <div className={styles.item}>
              <img className={styles.img} src={world} alt="world" />
              <div className={styles.name}>{props.strings.remoteTitle}</div>
              <div className={styles.description}>
                {props.strings.remoteText}
              </div>
            </div>
            <div className={cx(styles.item, styles.last)}>
              <Location color="#ffffff" width="50" heigth="50" />
              <div className={styles.name}>{props.strings.locationTitle}</div>
              <div className={styles.description}>
                {props.strings.locationText}
              </div>
              <div className={cx(styles.description, styles.multiple)}>
                UTC -05:00
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default About;
