import React from "react";
import styles from "./subtitle.module.scss";
import cx from "classnames";

interface ISubtitleProps {
  text: string;
  className?: string;
  ref?: React.Ref<any>;
}

const SubTitle: React.FC<ISubtitleProps> = React.forwardRef(
  (props: ISubtitleProps, ref: React.Ref<any>) => (
    <h2 ref={ref ? ref : null} className={cx(styles.sub, props.className)}>
      {props.text}
    </h2>
  )
);

export default SubTitle;
