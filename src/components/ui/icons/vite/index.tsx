import React from "react";
import styles from "../expIcon.module.scss";
import viteLogo from "icons/vite.png";

const ViteIcon: React.FC = () => (
  <div className={styles.container}>
    <img src={viteLogo} alt="Vite" width="48" height="48" />
    <div className={`${styles.text}`}>Vite</div>
  </div>
);

export default ViteIcon;
