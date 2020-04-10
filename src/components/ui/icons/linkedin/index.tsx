import React from "react";
import { IIconProps } from "../IconProps";

const Linkedin: React.FC<IIconProps> = (props) => (
  <svg
    data-name="Layer 21"
    height="14"
    id="Layer_21"
    viewBox="0 0 24 24"
    width="14"
  >
    <rect fill={props.color} height="11" width="4" x="3" y="9" />
    <circle fill={props.color} cx="5" cy="5" r="2" />
    <path
      fill={props.color}
      d="M16.5,8.25A4.47251,4.47251,0,0,0,13,9.95343V9H9V20h4V13a2,2,0,0,1,4,0v7h4V12.75A4.5,4.5,0,0,0,16.5,8.25Z"
    />
  </svg>
);

export default Linkedin;
