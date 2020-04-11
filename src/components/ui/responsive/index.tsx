import React, { useRef, useEffect, useState } from "react";
import styles from "./responsive.module.scss";
import cx from "classnames";
import responsiveImg from "icons/responsive.png";

const Responsive: React.FC<any> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [animateClassImg, setAnimateClassImg] = useState("");
  const [animateClassText, setAnimateClassText] = useState("");

  useEffect(
    function () {
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
    },
    [ref]
  );
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.content}>
        <img
          className={cx(styles.img, animateClassImg)}
          src={responsiveImg}
          alt="responsive"
        />
        <div>
          <div className={cx(styles.text, animateClassText)}>
            I build the applications with responsive design in mind, always
            testing across browsers
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
