import React from "react";
import styles from "./about.module.scss";
import cx from "classnames";
import { ILanguageProps } from "data/strings";
import Subtitle from "components/ui/subtitle";

export interface ISectionProps extends ILanguageProps {
  ref: React.Ref<any>;
}

interface IAboutProps extends ISectionProps {
  animate: boolean;
}

const About: React.FC<IAboutProps> = React.forwardRef(
  (props: IAboutProps, ref: React.Ref<any>) => {
    return (
      <div className={cx("container", styles.container)}>
        <Subtitle ref={ref} text={props.strings.aboutMeTitle} />
        <p className={styles.text}>{props.strings.textAbout}</p>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div
              className={cx(styles.item, { [styles.moveUp]: props.animate })}
            >
              <div className={styles.code}>
                <div className={styles.upperBar}>
                  <div className={styles.upperButton} />
                  <div className={cx(styles.upperButton, styles.second)} />
                  <div className={cx(styles.upperButton, styles.last)} />
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
              className={cx(styles.item, styles.middle, {
                [styles.moveUp]: props.animate,
              })}
            >
              <div className={styles.pc}>
                <div className={styles.screen}>
                  <div className={styles.navbar} />
                  <div className={styles.participant}>
                    <div className={styles.head} />
                    <div className={styles.body} />
                  </div>
                  <div className={cx(styles.participant, styles.small)}>
                    <div className={cx(styles.head, styles.small)} />
                    <div className={cx(styles.body, styles.small)} />
                  </div>
                  <div
                    className={cx(styles.participant, styles.small, styles.two)}
                  >
                    <div className={cx(styles.head, styles.small)} />
                    <div className={cx(styles.body, styles.small)} />
                  </div>
                  <div className={styles.bottomMenu}>
                    <div className={cx(styles.button, styles.red)} />
                    <div className={styles.button} />
                    <div className={cx(styles.button, styles.red)} />
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
              className={cx(styles.item, styles.last, {
                [styles.moveUp]: props.animate,
              })}
            >
              <div className={styles.location} />
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
