import React from "react";
import styles from "./pager.module.scss";
import cx from "classnames";

interface IPagerProps {
  numberOfElements: number;
  activePage: number;
  pageSize: number;
  onSetPage: (newPage: number) => void;
}

const Pager: React.FC<IPagerProps> = ({
  numberOfElements,
  activePage,
  pageSize,
  onSetPage,
}) => {
  const numberOfPages = Math.ceil(numberOfElements / pageSize);
  let pages: number[] = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.container}>
      <div className="flex-center">
        {pages.map((item) => {
          const handleItemClick = () => {
            onSetPage(item - 1);
          };
          return (
            <div
              className={cx(
                styles.button,
                item - 1 === activePage ? styles.active : ""
              )}
              key={item}
              onClick={handleItemClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pager;
