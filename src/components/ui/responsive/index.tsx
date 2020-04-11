import React from "react";
import styles from "./responsive.module.scss";
import responsiveImg from "icons/responsive.png";

const Responsive: React.FC<any> = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <img className={styles.img} src={responsiveImg} alt="responsive" />
      <div>
        <div className={styles.text}>
          I build the applications with responsive design in mind, always
          testing across browsers
        </div>
      </div>
    </div>
  </div>
);

export default Responsive;
