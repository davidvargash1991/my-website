import React from "react";
import styles from "./portfolio.module.scss";
import Project from "../project";
import { ILanguageProps, IProject } from "data/strings";
import { ISectionProps } from "../about";

const Portfolio: React.FC<ISectionProps> = React.forwardRef(
  (props: ILanguageProps, ref: React.Ref<any>) => {
    return (
      <div ref={ref} className={styles.container}>
        <h2 className={styles.title}>{props.strings.portfolioTitle}</h2>
        <p className={styles.text}>{props.strings.portfolioText}</p>
        <div className={styles.projects}>
          {props.strings.projects.map((project: IProject, index: number) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    );
  }
);

export default Portfolio;
