import React, { useState } from "react";
import styles from "./experience.module.scss";
import cx from "classnames";
import { useSwipeable } from "react-swipeable";
import ExperienceItem from "./item";
import { ILanguageProps } from "data/strings";
import { ISectionProps } from "../about";
import Subtitle from "components/ui/subtitle";
import Caret from "components/ui/icons/caret";

const Experience: React.FC<ISectionProps> = React.forwardRef(
  (props: ILanguageProps, ref: React.Ref<any>) => {
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
      </div>
    );
  }
);

export default Experience;
