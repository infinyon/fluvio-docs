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
      className={props.className}
      fill="currentColor"
    >
      <path d="M160 40a88.09 88.09 0 00-78.71 48.67A64 64 0 1072 216h88a88 88 0 000-176zm0 160H72a48 48 0 010-96c1.1 0 2.2 0 3.29.11A88 88 0 0072 128a8 8 0 0016 0 72 72 0 1172 72z"></path>
    </svg>
  );
}

export default Icon;
