import React from "react";
import styles from "../expIcon.module.scss";
import rtlLogo from "icons/rtl.png";

const RtlIcon: React.FC = () => (
  <div className={styles.container}>
    <img src={rtlLogo} alt="React Testing Library" width="48" height="48" />
    <div className={`${styles.text}`}>React Testing Library</div>
  </div>
);

export default RtlIcon;