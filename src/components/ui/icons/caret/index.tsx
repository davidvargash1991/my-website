import React from "react";

interface ICaretProps {
  down?: boolean;
}

const Caret: React.FC<ICaretProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.5 5.75L8 10.25l-4.5-4.5"
      />
    </svg>
  );
};

export default Caret;
