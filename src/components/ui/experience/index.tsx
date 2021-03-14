import React, { useState } from "react";
import styles from "./experience.module.scss";
import cx from "classnames";
import moment from "moment";
import { useSwipeable } from "react-swipeable";
import ExperienceItem from "./item";
import { ISectionProps } from "../about";
import Subtitle from "components/ui/subtitle";
import Caret from "components/ui/icons/caret";
import reactLogo from "icons/react.png";
import netLogo from "icons/net.png";
import JsIcon from "components/ui/icons/javascript";

interface IExperienceProps extends ISectionProps {
  animate: boolean;
}

const Experience: React.FC<IExperienceProps> = React.forwardRef(
  (props: IExperienceProps, ref: React.Ref<any>) => {
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
      onSwipedRight: (eventData) => handlePrevClick(),
      onSwipedLeft: (eventData) => handleNextClick(),
    });

    const expReact = moment().diff(moment("01-12-2018", "DD-MM-YYYY"), "years");
    const expDotNet = moment().diff("2015-11-01", "years");

    const lang = window.location.pathname.substr(1, 2);

    return (
      <div ref={ref} className={cx("container", styles.container)}>
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
              className={cx(styles.item, { [styles.moveUp]: props.animate })}
            >
              <img className={styles.img} src={reactLogo} alt="react" />
              <div className={styles.name}>{`${expReact} ${
                lang === "es" ? "años de experiencia" : "years of experience"
              }`}</div>
            </div>
            <div
              className={cx(styles.item, styles.middle, {
                [styles.moveUp]: props.animate,
              })}
            >
              <img className={styles.img} src={netLogo} alt="dotnet" />
              <div className={styles.name}>{`${expDotNet} ${
                lang === "es" ? "años de experiencia" : "years of experience"
              }`}</div>
            </div>
            <div
              className={cx(styles.item, styles.last, {
                [styles.moveUp]: props.animate,
              })}
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
