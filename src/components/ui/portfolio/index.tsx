import React from "react";
import styles from "./portfolio.module.scss";
import _ from "lodash";
import Project from "../project";
import { ILanguageProps, IProject } from "data/strings";
import { ISectionProps } from "../about";

const Portfolio: React.FC<ISectionProps> = React.forwardRef(
  (props: ILanguageProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={styles.container}>
        <div className={styles.title}>{props.strings.portfolioTitle}</div>
        <p className={styles.text}>{props.strings.portfolioText}</p>
        <div className={styles.projects}>
          {_.map(props.strings.projects, (project: IProject, index: number) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    );
  }
);

export default Portfolio;
