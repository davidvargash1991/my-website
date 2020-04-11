import React, { useRef, useEffect, useState } from "react";
import styles from "./responsive.module.scss";
import cx from "classnames";
import responsiveImg from "icons/responsive.png";
import { ILanguageProps } from "data/strings";

const Responsive: React.FC<ILanguageProps> = ({ strings }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [animateClassImg, setAnimateClassImg] = useState("");
  const [animateClassText, setAnimateClassText] = useState("");

  useEffect(
    function () {
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setAnimateClassImg(styles.animateImg);
            setAnimateClassText(styles.animateText);
            observer.disconnect();
          }
        });
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
    },
    [ref]
  );
  const endofSection: React.CSSProperties = { height: "1px", width: "1px" };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={cx(styles.img, animateClassImg)}
          src={responsiveImg}
          alt="responsive"
        />
        <div>
          <div className={cx(styles.text, animateClassText)}>
            {strings.responsiveText}
          </div>
        </div>
      </div>
      <div ref={ref} style={endofSection} />
    </div>
  );
};

export default Responsive;
