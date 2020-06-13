import React, { useState } from "react";
import styles from "./portfolio.module.scss";
import cx from "classnames";
import Project from "../project";
import { IProject } from "data/strings";
import { ISectionProps } from "../about";
import Subtitle from "components/ui/subtitle";
import Pager from "components/ui/pager";

interface IPortfolioProps extends ISectionProps {
  viewportWidth: number;
}

const Portfolio: React.FC<IPortfolioProps> = React.forwardRef(
  (props: IPortfolioProps, ref: React.Ref<any>) => {
    const [page, setPage] = useState(0);

    const handlePagerChange = (newPage: number) => {
      setPage(newPage);
    };

    const pageSize = props.viewportWidth > 767 ? 4 : 1;

    return (
      <div ref={ref} className={cx("container", styles.container)}>
        <Subtitle text={props.strings.portfolioTitle} />
        <p className={styles.text}>{props.strings.portfolioText}</p>
        <div className={styles.projects}>
          {props.strings.projects
            .slice(page * pageSize, page * pageSize + pageSize)
            .map((project: IProject, index: number) => (
              <Project key={index} project={project} />
            ))}
        </div>
        <Pager
          numberOfElements={props.strings.projects.length}
          activePage={page}
          pageSize={pageSize}
          onSetPage={handlePagerChange}
        />
      </div>
    );
  }
);

export default Portfolio;
