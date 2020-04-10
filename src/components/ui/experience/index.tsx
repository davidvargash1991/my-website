import React from "react";
import styles from "./experience.module.scss";
import _ from "lodash";
import ExperienceItem from "./item";
import { ILanguageProps } from "data/strings";
import { ISectionProps } from "../about";

const Experience: React.FC<ISectionProps> = React.forwardRef(
  (props: ILanguageProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={styles.container}>
        <div className={styles.title}>{props.strings.experienceTitle}</div>
        <div className={styles.timeline}>
          {_.map(props.strings.experience, (exp, idx) => (
            <ExperienceItem key={idx} experience={exp} />
          ))}
        </div>
      </div>
    );
  }
);

export default Experience;
