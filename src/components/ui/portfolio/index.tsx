import React, { useState } from "react";
import styles from "./portfolio.module.scss";
import { useSwipeable } from "react-swipeable";
import Project from "../project";
import type { IProject } from "data/strings";
import type { ISectionProps } from "../about";
import Subtitle from "components/ui/subtitle";
import Pager from "components/ui/pager";

interface IPortfolioProps extends ISectionProps {
  viewportWidth: number;
}

const Portfolio = React.forwardRef<HTMLDivElement, IPortfolioProps>(
  (props, ref) => {
    const [page, setPage] = useState(0);

    const pageSize = props.viewportWidth > 767 ? 4 : 1;

    const numberOfPages = Math.ceil(props.strings.projects.length / pageSize);

    const handlers = useSwipeable({
      onSwipedRight: () => setPage(page > 0 ? page - 1 : 0),
      onSwipedLeft: () => {
        if (page + 1 < numberOfPages) {
          setPage(page + 1);
        }
      },
    });

    const handlePagerChange = (newPage: number) => {
      setPage(newPage);
    };

    return (
      <div ref={ref} className={`container ${styles.container}`}>
        <Subtitle text={props.strings.portfolioTitle} />
        <p className={styles.text}>{props.strings.portfolioText}</p>
        <div {...handlers} className={styles.projects}>
          {props.strings.projects
            .slice(page * pageSize, page * pageSize + pageSize)
            .map((project: IProject, index: number) => (
              <Project key={index} project={project} />
            ))}
        </div>
        <Pager
          numberOfPages={numberOfPages}
          activePage={page}
          onSetPage={handlePagerChange}
        />
      </div>
    );
  }
);

export default Portfolio;
