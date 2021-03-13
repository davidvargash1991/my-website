import React from "react";
import styles from "./project.module.scss";
import cx from "classnames";
import { isMobile } from "utils/mobile";
import { IProject } from "data/strings";
import Github from "components/ui/icons/github";
import Web from "components/ui/icons/web";

interface IProjectProps {
  project: IProject;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const handleContainerClick = () => {
    if (isMobile()) {
      if (project.link) {
        window.open(project.link, "_blank");
      } else {
        window.open(project.repo, "_blank");
      }
    }
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <img className={styles.img} src={project.img} alt={project.title} />
      {!isMobile() && (
        <div className={cx("flex-center", styles.imgContainer)}>
          <div className={styles.buttons}>
            <a
              className={cx("flex-center", styles.button)}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github color="#ffffff" heigth="16" width="16" />
              Repo
            </a>
            {project.link && (
              <a
                className={cx("flex-center", styles.button)}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Web color="#ffffff" heigth="16" width="16" />
                Visit
              </a>
            )}
          </div>
        </div>
      )}
      <div className={styles.type}>{project.type}</div>
      <div className={styles.title}>{project.title}</div>
      <div className={styles.description}>{project.description}</div>
      <div
        className={cx(styles.buttons, !project.link ? styles.single : "")}
      ></div>
    </div>
  );
};

export default Project;
