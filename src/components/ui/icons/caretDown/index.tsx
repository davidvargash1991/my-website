import React from "react";
import { IIconProps } from "../IconProps";

const Caret: React.FC<IIconProps> = (props) => (
  <svg
    viewBox="0 0 16 16"
    data-supported-dps="16x16"
    fill={props.color}
    width="16"
    height="16"
    focusable="false"
  >
    <path d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"></path>
  </svg>
);

export default Caret;
