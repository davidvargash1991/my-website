import React from "react";
import styles from "./about.module.scss";
import type { ILanguageProps } from "data/strings";
import Subtitle from "components/ui/subtitle";

export interface ISectionProps extends ILanguageProps {
}

interface IAboutProps extends ISectionProps {
  animate: boolean;
}

const About = React.forwardRef<any, IAboutProps>(
  (props: IAboutProps, ref: React.Ref<any>) => {

    return (
      <div className={`container ${styles.container}`}>
        <Subtitle ref={ref} text={props.strings.aboutMeTitle} />
        <div className={styles.text} dangerouslySetInnerHTML={{__html: props.strings.textAbout}} />
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div
              className={`${styles.item} ${props.animate ? styles.moveUp : ''}`}
            >
              <div className={styles.code}>
                <div className={styles.upperBar}>
                  <div className={styles.upperButton} />
                  <div className={`${styles.upperButton} ${styles.second}`} />
                  <div className={`${styles.upperButton} ${styles.last}`} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                  <div className={styles.pink} />
                  <div className={styles.blue} />
                  <div className={styles.pink} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                  <div className={styles.pink} />
                  <div className={styles.blue} />
                  <div className={styles.pink} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                  <div className={styles.green} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                  <div className={styles.blue} />
                  <div className={styles.green} />
                  <div className={styles.green} />
                  <div className={styles.yellow} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                  <div className={styles.transparent} />
                  <div className={styles.yellow} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                  <div className={styles.transparent} />
                  <div className={styles.transparent} />
                  <div className={styles.pink} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                  <div className={styles.transparent} />
                  <div className={styles.transparent} />
                  <div className={styles.transparent} />
                  <div className={styles.blue} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                </div>
                <div className={styles.line}>
                  <div className={styles.enumeration} />
                  <div className={styles.pink} />
                  <div className={styles.pink} />
                  <div className={styles.blue} />
                </div>
              </div>
              <div className={styles.name}>{props.strings.experienceTitle}</div>
              <div className={styles.description}>{props.strings.totalExp}</div>
            </div>
            <div
              className={`${styles.item} ${styles.middle} ${props.animate ? styles.moveUp : ''}`}
            >
              <div className={styles.pc}>
                <div className={styles.screen}>
                  <div className={styles.navbar} />
                  <div className={styles.participant}>
                    <div className={styles.head} />
                    <div className={styles.body} />
                  </div>
                  <div className={`${styles.participant} ${styles.small}`}>
                    <div className={`${styles.head} ${styles.small}`} />
                    <div className={`${styles.body} ${styles.small}`} />
                  </div>
                  <div
                    className={`${styles.participant} ${styles.small} ${styles.two}`}
                  >
                    <div className={`${styles.head} ${styles.small}`} />
                    <div className={`${styles.body} ${styles.small}`} />
                  </div>
                  <div className={styles.bottomMenu}>
                    <div className={`${styles.button} ${styles.red}`} />
                    <div className={styles.button} />
                    <div className={`${styles.button} ${styles.red}`} />
                  </div>
                </div>
              </div>
              <div className={styles.pcNeck} />
              <div className={styles.pcBase} />
              <div className={styles.name}>{props.strings.remoteTitle}</div>
              <div className={styles.description}>
                {props.strings.remoteText}
              </div>
            </div>
            <div
              className={`${styles.item} ${styles.last} ${props.animate ? styles.moveUp : ''}`}
            >
              <div className={styles.location} />
              <div className={styles.name}>{props.strings.locationTitle}</div>
              <div className={styles.description}>
                {props.strings.locationText}
              </div>
              <div className={`${styles.description} ${styles.multiple}`}>
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
