import React, { useState } from "react";
import styles from "./experience.module.scss";
import _ from "lodash";
import cx from "classnames";
import ExperienceItem from "./item";
import CaretDown from "../icons/caretDown";
import { ILanguageProps } from "data/strings";
import { ISectionProps } from "../about";

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
      <div ref={ref} className={styles.container}>
        <h2 className={styles.title}>{props.strings.experienceTitle}</h2>
        <div className={styles.items} style={itemsStyle}>
          {_.map(props.strings.experience, (exp, idx) => {
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
