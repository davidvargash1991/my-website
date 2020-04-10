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
      <div className={styles.content}>
        <div className={styles.location}>
          <img className={styles.icon} src={location} alt="location" />
          {`${experience.location} - ${experience.date}`}
        </div>
        <h3 className={styles.company}>{experience.company}</h3>
        <div className={styles.position}>{experience.position}</div>
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
