import React, { useState } from "react";
import styles from "./experience.module.scss";
import cx from "classnames";
import ExperienceItem from "./item";
import CaretDown from "../icons/caretDown";
import { ILanguageProps } from "data/strings";
import { ISectionProps } from "../about";
import Subtitle from "components/ui/subtitle";

const Experience: React.FC<ISectionProps> = React.forwardRef(
  (props: ILanguageProps, ref: React.Ref<any>) => {
    const [btnLabel, setBtnLabel] = useState(props.strings.expereinceBtnMore);
    const [maxHeight, setMaxHeight] = useState("740px");
    let itemsStyle: React.CSSProperties = { maxHeight: maxHeight };
    const handleMoreClick = () => {
      if (btnLabel === props.strings.expereinceBtnMore) {
        setMaxHeight("initial");
        setBtnLabel(props.strings.expereinceBtnLess);
      } else {
        setMaxHeight("740px");
        setBtnLabel(props.strings.expereinceBtnMore);
      }
    };
    return (
      <div ref={ref} className={cx("container", styles.container)}>
        <Subtitle
          className={styles.subtitle}
          text={props.strings.experienceTitle}
        />
        <div className={styles.items} style={itemsStyle}>
          {props.strings.experience.map((exp, idx) => {
            return <ExperienceItem key={idx} experience={exp} />;
          })}
        </div>
        <div className={styles.more} onClick={handleMoreClick}>
          {btnLabel}
          <div
            className={cx(
              styles.icon,
              btnLabel === props.strings.expereinceBtnLess ? styles.up : ""
            )}
          >
            <CaretDown color="#2087c5" />
          </div>
        </div>
      </div>
    );
  }
);

export default Experience;
