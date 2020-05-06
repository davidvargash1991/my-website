import React from "react";
import styles from "./portfolio.module.scss";
import cx from "classnames";
import Project from "../project";
import { ILanguageProps, IProject } from "data/strings";
import { ISectionProps } from "../about";
import Subtitle from "components/ui/subtitle";

const Portfolio: React.FC<ISectionProps> = React.forwardRef(
  (props: ILanguageProps, ref: React.Ref<any>) => {
    return (
      <div ref={ref} className={cx("container", styles.container)}>
        <Subtitle text={props.strings.portfolioTitle} />
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
