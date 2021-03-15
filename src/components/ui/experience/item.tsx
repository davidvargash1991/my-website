import React from "react";
import styles from "./item.module.scss";
import cx from "classnames";
import { IExperience } from "data/strings";
import location from "icons/location.svg";
import TsIcon from "components/ui/icons/typescript";
import SassIcon from "components/ui/icons/sass";
import GithubIcon from "components/ui/icons/githubFull";
import JestIcon from "components/ui/icons/jest";
import JsIcon from "components/ui/icons/javascript";
import XamarinIcon from "components/ui/icons/xamarin";
import ReduxIcon from "components/ui/icons/redux";

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
          {experience.technologies.map((tech, idx) => {
            switch (tech.alt) {
              case "Github":
                return <GithubIcon key={tech.alt} />;
              case "Jest":
                return <JestIcon key={tech.alt} />;
              case "Javascript":
                return <JsIcon key={tech.alt} />;
              case "Redux":
                return <ReduxIcon key={tech.alt} />;
              case "Sass":
                return <SassIcon key={tech.alt} />;
              case "Typescript":
                return <TsIcon key={tech.alt} />;
              case "Xamarin":
                return <XamarinIcon key={tech.alt} />;
              default:
                return (
                  <img
                    key={tech.alt}
                    className={styles.tech}
                    alt={tech.alt}
                    src={tech.img}
                  />
                );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
