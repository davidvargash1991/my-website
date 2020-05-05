import React from "react";
import styles from "./project.module.scss";
import cx from "classnames";
import { isMobile } from "react-device-detect";
import { IProject } from "data/strings";
import Github from "components/ui/icons/github";
import web from "icons/web.svg";
import csharp from "icons/csharp.png";
import reactLogo from "icons/react-no-text.png";
import netLogo from "icons/net-orange-bg.png";

interface IProjectProps {
  project: IProject;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const getImgUrl = () => {
    switch (project.img) {
      case "csharp":
        return csharp;
      case "react":
        return reactLogo;
      case "net":
        return netLogo;
      default:
        return project.img;
    }
  };

  const src = getImgUrl();

  const logo = src !== project.img;

  const handleContainerClick = () => {
    if (isMobile) {
      if (project.link) {
        window.open(project.link, "_blank");
      } else {
        window.open(project.repo, "_blank");
      }
    }
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <img
        className={cx(styles.img, logo ? styles.logo : "")}
        src={src}
        alt={project.title}
      />
      {!isMobile && (
        <div className={styles.imgContainer}>
          <div className={styles.buttons}>
            <a
              className={styles.button}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github color="#ffffff" heigth="16" width="16" />
              Repo
            </a>
            {project.link && (
              <a
                className={styles.button}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.icon} src={web} alt="website" />
                Visit
              </a>
            )}
          </div>
        </div>
      )}
      <div className={styles.title}>{project.title}</div>
      <div className={styles.type}>{project.type}</div>
      <div className={styles.description}>{project.description}</div>
      <div
        className={cx(styles.buttons, !project.link ? styles.single : "")}
      ></div>
    </div>
  );
};

export default Project;
