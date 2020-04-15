import React from "react";
import styles from "./item.module.scss";
import _ from "lodash";
import { IExperience } from "data/strings";
import location from "icons/location.svg";

interface IExperienceItemProps {
  experience: IExperience;
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({ experience }) => {
  return (
    <div className={styles.container}>
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
        <ul>
          {_.map(experience.facts, (fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
        <div className={styles.techTitle}>Technologies:</div>
        <div className={styles.technologies}>
          {_.map(experience.technologies, (tech, idx) => (
            <div key={`${tech}${idx}`} className={styles.tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
