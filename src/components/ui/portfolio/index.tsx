import React, { useState } from "react";
import styles from "./portfolio.module.scss";
import cx from "classnames";
import { useSwipeable } from "react-swipeable";
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

    const pageSize = props.viewportWidth > 767 ? 4 : 1;

    const numberOfPages = Math.ceil(props.strings.projects.length / pageSize);

    const handlers = useSwipeable({
      onSwipedRight: (eventData) => setPage(page > 0 ? page - 1 : 0),
      onSwipedLeft: (eventData) => {
        if (page + 1 < numberOfPages) {
          setPage(page + 1);
        }
      },
    });

    const handlePagerChange = (newPage: number) => {
      setPage(newPage);
    };

    return (
      <div ref={ref} className={cx("container", styles.container)}>
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
          pageSize={pageSize}
          onSetPage={handlePagerChange}
        />
      </div>
    );
  }
);

export default Portfolio;
