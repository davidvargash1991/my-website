import React from "react";
import styles from "./about.module.scss";
import { ILanguageProps } from "data/strings";

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
      </div>
    );
  }
);

export default About;
