import React from "react";
import styles from "../expIcon.module.scss";
import nodeLogo from "icons/node.png";

const NodeIcon: React.FC = () => (
  <div className={styles.container}>
    <img src={nodeLogo} alt="Node.js" width="48" height="48" />
    <div className={`${styles.text}`}>Node.js</div>
  </div>
);

export default NodeIcon;
