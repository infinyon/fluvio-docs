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
      <path d="M200 64v104a8 8 0 01-16 0V83.31L69.66 197.66a8 8 0 01-11.32-11.32L172.69 72H88a8 8 0 010-16h104a8 8 0 018 8z"></path>
    </svg>
  );
}

export default Icon;
