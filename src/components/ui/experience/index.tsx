import React, { useState } from "react";
import styles from "./experience.module.scss";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useSwipeable } from "react-swipeable";
import ExperienceItem from "./item";
import type { ISectionProps } from "../about";
import Subtitle from "components/ui/subtitle";
import Caret from "components/ui/icons/caret";
import reactLogo from "icons/react.png";
import netLogo from "icons/net.png";
import JsIcon from "components/ui/icons/javascript";

dayjs.extend(customParseFormat);

interface IExperienceProps extends ISectionProps {
  animate: boolean;
}

const Experience = React.forwardRef<HTMLDivElement, IExperienceProps>(
  (props, ref) => {
    const [activeItem, setActiveItem] = useState(0);

    const handleNextClick = () => {
      if (activeItem + 1 < props.strings.experience.length) {
        setActiveItem(activeItem + 1);
      }
    };

    const handlePrevClick = () => {
      setActiveItem(activeItem > 0 ? activeItem - 1 : 0);
    };

    const handlers = useSwipeable({
      onSwipedRight: () => handlePrevClick(),
      onSwipedLeft: () => handleNextClick(),
    });

    const expReact = dayjs().diff(dayjs("01-12-2018", "DD-MM-YYYY"), "year");
    const expDotNet = dayjs().diff("2015-11-01", "year");

    const lang = window.location.pathname.substr(1, 2);

    return (
      <div ref={ref} className={`container ${styles.container}`}>
        <Subtitle
          className={styles.subtitle}
          text={props.strings.experienceTitle}
        />
        <div {...handlers} className={styles.items}>
          {activeItem > 0 && (
            <div className={styles.caretPrev} onClick={handlePrevClick}>
              <Caret />
            </div>
          )}
          <ExperienceItem experience={props.strings.experience[activeItem]} />
          {activeItem + 1 < props.strings.experience.length && (
            <div className={styles.caretNext} onClick={handleNextClick}>
              <Caret />
            </div>
          )}
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div
              className={ `${styles.item} ${props.animate ? styles.moveUp : ''}` }
            >
              <img className={styles.img} src={reactLogo} alt="react" />
              <div className={styles.name}>{`${expReact} ${
                lang === "es" ? "años de experiencia" : "years of experience"
              }`}</div>
            </div>
            <div
              className={ `${styles.item} ${styles.middle} ${props.animate ? styles.moveUp : ''}` }
            >
              <img className={styles.img} src={netLogo} alt="dotnet" />
              <div className={styles.name}>{`${expDotNet} ${
                lang === "es" ? "años de experiencia" : "years of experience"
              }`}</div>
            </div>
            <div
              className={ `${styles.item} ${styles.last} ${props.animate ? styles.moveUp : ''}` }
            >
              <JsIcon />
              <div className={styles.name}>{`${expDotNet} ${
                lang === "es" ? "años de experiencia" : "years of experience"
              }`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Experience;
