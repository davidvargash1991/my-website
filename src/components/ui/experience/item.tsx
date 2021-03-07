import React from "react";
import styles from "./item.module.scss";
import cx from "classnames";
import { IExperience } from "data/strings";
import location from "icons/location.svg";

interface IExperienceItemProps {
  experience: IExperience;
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({ experience }) => {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.image}
          alt={experience.company}
          src={experience.img}
        />
        <div className={styles.content}>
          <div className={styles.position}>{experience.position}</div>
          <div className={styles.location}>
            <img className={styles.icon} src={location} alt="location" />
            {`${experience.location} - ${experience.date}`}
          </div>
          <ul style={{ paddingLeft: "20px" }}>
            {experience.facts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.technologies}>
        <div className={cx(styles.position, styles.tech)}>Technologies:</div>
        <div className={styles.techs}>
          {experience.technologies.map((tech, idx) => (
            <img
              key={tech.alt}
              className={styles.tech}
              alt={tech.alt}
              src={tech.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
