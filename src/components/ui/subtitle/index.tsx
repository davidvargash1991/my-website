import React from "react";
import styles from "./subtitle.module.scss";

interface ISubtitleProps {
  text: string;
  className?: string;
  ref?: any;
}

const SubTitle: React.FC<ISubtitleProps> = React.forwardRef(
  (props: ISubtitleProps, ref: React.Ref<any>) => (
    <h2 ref={ref ? ref : null} className={` ${styles.sub} ${props.className}`}>
      {props.text}
    </h2>
  )
);

export default SubTitle;
