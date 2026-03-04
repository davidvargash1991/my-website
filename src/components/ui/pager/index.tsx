import React from "react";
import styles from "./pager.module.scss";

interface IPagerProps {
  numberOfPages: number;
  activePage: number;
  onSetPage: (newPage: number) => void;
}

const Pager: React.FC<IPagerProps> = ({
  numberOfPages,
  activePage,
  onSetPage,
}) => {
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
              className={`${styles.button} ${item - 1 === activePage ? styles.active : ""}`}
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
