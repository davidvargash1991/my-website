import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Profile.module.scss";
import photo from "icons/photo.jpg";
import { strings } from "data/profile";
import { strings as mainStrings } from "data/strings";
import Mail from "components/ui/icons/mail";
import Location from "components/ui/icons/location";
import Phone from "components/ui/icons/phone";
import TsIcon from "components/ui/icons/typescript";
import SassIcon from "components/ui/icons/sass";
import GithubIcon from "components/ui/icons/githubFull";
import JestIcon from "components/ui/icons/jest";
import JsIcon from "components/ui/icons/javascript";
import XamarinIcon from "components/ui/icons/xamarin";
import ReduxIcon from "components/ui/icons/redux";

const Profile = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang");

  const currentStrings = lang === "es" ? strings.spanish : strings.english;
  const currentMainStrings =
    lang === "es" ? mainStrings.spanish : mainStrings.english;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.photoContainer}>
          <img src={photo} alt="David Vargas" />
        </div>
        <h3 className={styles.leftSubTitle}>{currentStrings.contactTitle}</h3>
        <div className={styles.text}>
          <Mail />
          <span>Email: </span> <span>davidvargash.1991@tutanota.com</span>
        </div>
        <div className={styles.text}>
          <Phone />
          <span>Tel: </span> <span>+573133461507</span>
        </div>
        <div className={styles.text}>
          <Location />
          <span>Bogotá, Colombia</span>
        </div>
        <h3 className={styles.leftSubTitle}>{currentStrings.skillsTitle}</h3>
        <ul className={styles.techsLeft}>
          <li>{`React - 5.5 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Next.js - 3 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`.Net - 4 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Javascript - 9 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Typescript - 5 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`CSS - 9 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`HTML - 9 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Tailwind CSS - 1.5 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`SASS - 2.5 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Bootstrap - 1 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Xamarin - 0.5 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Github - 5 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Jest - 5 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`SQL Server - 4 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Oracle - 3 ${lang === "es" ? "años" : "years"}`}</li>
          <li>{`Azure - 2 ${lang === "es" ? "meses" : "months"}`}</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h2>David Vargas Herrera</h2>
        <h3 className={styles.subTitle}>Full Stack Developer</h3>
        <div>
          <p>{currentStrings.overview}</p>
        </div>
        <div>
          <h3 className={styles.subTitle}>{currentStrings.experienceTitle}</h3>
          {currentMainStrings.experience.map((xp) => {
            return (
              <div key={xp.company} className={styles.jobWrapper}>
                <div className={styles.jobHeader}>
                  <img className={styles.icon} src={xp.img} alt="location" />
                  <div>
                    <h4>{xp.company}</h4>
                    <span>{`${xp.position} - ${xp.date}`}</span>
                  </div>
                </div>
                <ul className={styles.facts}>
                  {xp.facts.map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                  ))}
                </ul>
                <div className={styles.techsWrapper}>
                  <h4>{currentStrings.skillsTitle}</h4>
                  <div className={styles.techs}>
                    {xp.technologies.map((tech, idx) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
