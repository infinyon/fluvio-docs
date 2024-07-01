import React from "react";

function Icon(props: {
  className: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={props.className}
    >
      <path d="M205.66 117.66a8 8 0 01-11.32 0L136 59.31V216a8 8 0 01-16 0V59.31l-58.34 58.35a8 8 0 01-11.32-11.32l72-72a8 8 0 0111.32 0l72 72a8 8 0 010 11.32z"></path>
    </svg>
  );
}

export default Icon;
